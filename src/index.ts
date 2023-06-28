import { stripHexPrefixIfNecessary, getTransactionByHash, getTransactionReceipt, getBlockByHash } from './utils.js';
import { RLP } from '@ethereumjs/rlp'
import { Trie } from '@ethereumjs/trie';
import { encodeReceipt } from "@ethereumjs/vm/dist/runBlock.js";

import { DummyRefunder__factory } from './types/typechain/factories/DummyRefunder__factory.js';
import { BlockDataStruct, DummyRefunder, LogStruct, ProverDtoStruct, ReceiptStruct } from './types/typechain/DummyRefunder';

import { TrustedOracle__factory } from './types/typechain/factories/TrustedOracle__factory.js';
import { TrustedOracle } from './types/typechain/TrustedOracle';

import * as dotenv from "dotenv";

import { BigNumber, ethers } from 'ethers';
import { assert } from "chai";

import { TxReceipt } from '@ethereumjs/vm';
import type { JsonRpcTx } from '@ethereumjs/tx'
import type {Log} from '@ethereumjs/evm';
dotenv.config();

assert(process.env.OWNER_PK !== undefined);
assert(process.env.RPC_URL !== undefined);
assert(process.env.NETWORK_ID !== undefined);
assert(process.env.ORACLE_ADDRESS !== undefined);
assert(process.env.REFUNDER_ADDRESS !== undefined);

const ownerPrivateKey = process.env.OWNER_PK;
const rpcUrl = process.env.RPC_URL;
const chainId = parseInt(process.env.NETWORK_ID);
const oracleAddress = process.env.ORACLE_ADDRESS;
const refunderAddress = process.env.REFUNDER_ADDRESS;

// setup provider, wallet, contract
const provider = new ethers.providers.JsonRpcProvider(
    rpcUrl,
    chainId
);

const wallet = new ethers.Wallet(ownerPrivateKey, provider);

const oracleContract: TrustedOracle = TrustedOracle__factory.connect(oracleAddress, wallet);
const refunder: DummyRefunder = DummyRefunder__factory.connect(refunderAddress, wallet);

// run the script for this tx
const txHash = "0x04eb492e769ec030a9ce5720ad9023cf8401ed8dbdb71c28958197ced6d4b646";

// gather data
const txData: JsonRpcTx = await getTransactionByHash(txHash);
const txReceipt = await getTransactionReceipt(txHash);

// check tx status == 0
if (parseInt(txReceipt.status) !== 1) throw new Error("tx status is not successfull");

const blockData = await getBlockByHash(txData.blockHash);
console.log(blockData);
console.log(parseInt(blockData.number), blockData.hash);

await oracleContract.setBlockHash(parseInt(blockData.number), blockData.hash);
//console.log(await oracleContract.getBlockHash(1));

const txReceipts = 
    await Promise.all(
        blockData.transactions.map((txHash: string) => {
            return getTransactionReceipt(txHash) as Promise<TxReceipt>;
        })
    );

const sortedTxReceipts = txReceipts.sort((a, b) => {
    return parseInt(a.transactionIndex) - parseInt(b.transactionIndex);
});

const receiptTrie = new Trie();
for (let i = 0; i < sortedTxReceipts.length; i++) {
    try {
        const logs: Log[] = sortedTxReceipts[i].logs.map((log: any) => {
                return [
                    Buffer.from(log.address.slice(2), 'hex'),
                    log.topics.map((topic: any) => Buffer.from(topic.slice(2), 'hex')),
                    Buffer.from(log.data.slice(2), 'hex')
                ]
            })

        const receipt: TxReceipt = {
            status: sortedTxReceipts[i].status === '0x1'? 1 : 0,
            cumulativeBlockGasUsed: BigInt(sortedTxReceipts[i].cumulativeGasUsed),
            bitvector: Buffer.from(sortedTxReceipts[i].logsBloom.slice(2), 'hex'),
            logs: logs,
        }
        const encodedReceipt = encodeReceipt(receipt, parseInt(sortedTxReceipts[i].type))
        //@ts-ignore
        await receiptTrie.put(RLP.encode(i), encodedReceipt)

    } catch (error) {
        console.error(`Failed to add data to trie at index ${i}: ${error}`);
    }
}

// check if receipts root matches
if (blockData.receiptsRoot !== `0x${receiptTrie.root().toString('hex')}`) {
    throw new Error("Receipts root mismatch");
}

//const receiptProofBranch = await receiptTrie.createProof(Buffer.from(RLP.encode(parseInt(txReceipt.transactionIndex))));
const path = await receiptTrie.findPath(Buffer.from(RLP.encode(parseInt(txReceipt.transactionIndex))));

const pathTxHashes = path.stack.map((x: any) => {
    return ethers.utils.keccak256(x._value);
})

const blockDataDto: BlockDataStruct = {
    parentHash: blockData.parentHash,
    sha3Uncles: blockData.sha3Uncles,
    miner: blockData.miner,
    stateRoot: blockData.stateRoot,
    transactionsRoot: blockData.transactionsRoot,
    receiptsRoot: blockData.receiptsRoot,
    logsBloom: blockData.logsBloom,
    difficulty: BigNumber.from(blockData.difficulty),
    number: BigNumber.from(blockData.number),
    gasLimit: BigNumber.from(blockData.gasLimit),
    gasUsed: BigNumber.from(blockData.gasUsed),
    timestamp: BigNumber.from(blockData.timestamp),
    extraData: blockData.extraData,
    mixHash: blockData.mixHash,
    nonce: BigNumber.from(blockData.nonce)
}

const logs: LogStruct[] = txReceipt.logs.map((log: any) => {
    return {
        address: log.address,
        topics: log.topics,
        data: log.data
    }
});

const receiptDto: ReceiptStruct = {
    status: txReceipt.status === '0x1',
    cumulativeGasUsed: BigNumber.from(txReceipt.cumulativeGasUsed),
    bitvector: txReceipt.logsBloom,
    logs: logs
}

const proverDto: ProverDtoStruct = {
    blockData: blockDataDto,
    txReceipt: receiptDto,
    blockNumber: BigNumber.from(blockData.number),
    receiptProofBranch: pathTxHashes
}

console.log(JSON.stringify(proverDto, null, 2));

const claimed = await refunder.claim(proverDto);