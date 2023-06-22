import * as utils from './utils.js';
import { RLP } from '@ethereumjs/rlp'
import { Trie } from '@ethereumjs/trie';
import { encodeReceipt} from "@ethereumjs/vm/dist/runBlock.js";

import TrustedOracleAbi from './abis/TrustedOracle.json' assert { type: "json" };
import * as dotenv from "dotenv";

import { ethers } from 'ethers';
import { assert } from "chai";
import { TxReceipt } from '@ethereumjs/vm';
import type { JsonRpcTx } from '@ethereumjs/tx'

import type {Log} from '@ethereumjs/evm';
import { TrustedOracle } from './types/typechain/TrustedOracle.js';
dotenv.config();

assert(process.env.OWNER_PK !== undefined);
assert(process.env.RPC_URL !== undefined);
assert(process.env.NETWORK_ID !== undefined);
assert(process.env.ORACLE_ADDRESS !== undefined);

const ownerPrivateKey = process.env.OWNER_PK;
const rpcUrl = process.env.RPC_URL;
const chainId = parseInt(process.env.NETWORK_ID);
const oracleAddress = process.env.ORACLE_ADDRESS;

// setup provider, wallet, contract
const provider = new ethers.providers.JsonRpcProvider(
    rpcUrl,
    chainId
);

const wallet = new ethers.Wallet(ownerPrivateKey, provider);

const oracleContract = new ethers.Contract(
    oracleAddress,
    TrustedOracleAbi,
    wallet,
) as TrustedOracle;

// run the script for this tx
const txHash = "0x04eb492e769ec030a9ce5720ad9023cf8401ed8dbdb71c28958197ced6d4b646";

// gather data
const txData: JsonRpcTx = await utils.getTransactionByHash(txHash);
const txReceipt = await utils.getTransactionReceipt(txHash);

// check tx status == 0
if (parseInt(txReceipt.status) !== 1) throw new Error("tx status is not successfull");

const blockData = await utils.getBlockByHash(txData.blockHash);
console.log(parseInt(blockData.number), blockData.hash);

await oracleContract.setBlockHash(parseInt(blockData.number), blockData.hash);
//console.log(await oracleContract.getBlockHash(1));

console.log("block receiptsRoot", blockData.receiptsRoot);

const txReceipts = 
    await Promise.all(
        blockData.transactions.map((txHash: string) => {
            return utils.getTransactionReceipt(txHash) as Promise<TxReceipt>;
        })
    );

const sortedTxReceipts = txReceipts.sort((a, b) => {
    return parseInt(a.transactionIndex) - parseInt(b.transactionIndex);
});

console.log('sortedTxReceipts[0]: ', sortedTxReceipts[0]);
const receiptTrie = new Trie();
for (let i = 0; i < sortedTxReceipts.length; i++) {
    try {
        const logs: Log[] = [
            sortedTxReceipts[i].logs.map((log: any) => {
                return {
                    address: Buffer.from(log.address.slice(2), 'hex'),
                    topics: log.topics.map((topic: any) => Buffer.from(topic.slice(2), 'hex')),
                    data: Buffer.from(log.data.slice(2), 'hex')
                }
            })
        ]
        const receipt: TxReceipt = {
            status: sortedTxReceipts[i].status === '0x1'? 1 : 0,
            cumulativeBlockGasUsed: BigInt(sortedTxReceipts[i].cumulativeGasUsed),
            bitvector: Buffer.from(sortedTxReceipts[i].logsBloom.slice(2), 'hex'),
            logs: logs,
        }
        const encodedReceipt = encodeReceipt(receipt, parseInt(sortedTxReceipts[i].type))
        await receiptTrie.put(Buffer.from(RLP.encode(i)), encodedReceipt)

    } catch (error) {
        console.error(`Failed to add data to trie at index ${i}: ${error}`);
    }
}
// console.log('receipts tree root pure', trie.root);
// console.log('receipts tree root keccak', keccak256(Buffer.from(trie.root)).toString('hex'));
console.log('Receipts trie root: ', '0x' + receiptTrie.root().toString('hex'));


// proof that this txReceipt exists and is with status 0