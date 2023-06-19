import * as utils from './utils.js';
import { SecureTrie } from 'merkle-patricia-tree';
import { bufferToHex, keccak256 } from 'ethereumjs-util';
import TrustedOracleAbi from './abis/TrustedOracle.json' assert { type: "json" };
import * as dotenv from "dotenv";
import { ethers } from 'ethers';
import rlp from 'rlp';
import { assert } from "chai";
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
);

oracleContract.owner().then((result: any) => {
    console.log('owner', result);
});

// run the script for this tx
const txHash = "0x04eb492e769ec030a9ce5720ad9023cf8401ed8dbdb71c28958197ced6d4b646";

// gather data
const txData = await utils.getTransactionByHash(txHash);
const txReceipt = await utils.getTransactionReceipt(txHash);

// check tx status == 0
// TODO: throw an error
txReceipt.status === '0x1' ? console.log('tx status is 0') : console.log('tx status is 1');

const blockHash = txData.blockHash;
const blockData = await utils.getBlockByHash(blockHash);
console.log(parseInt(blockData.number), blockData.hash);

await oracleContract.setBlockHash(parseInt(blockData.number), blockData.hash);
//console.log(await oracleContract.getBlockHash(1));

console.log("block receiptsRoot", blockData.receiptsRoot);

const txReceipts = 
    await Promise.all(
        blockData.transactions.map((txHash: string) => {
            return utils.getTransactionReceipt(txHash);
        })
    );

let sortedTxReceipts = [];
sortedTxReceipts = txReceipts.sort((a, b) => {
    return parseInt(a.transactionIndex) - parseInt(b.transactionIndex);
});

// create receipts trie // needs tweaking to match the block receiptsRoot
const trie = new SecureTrie();

for (let i = 0; i < sortedTxReceipts.length; i++) {
    const receipt = sortedTxReceipts[i];
    const key = Buffer.from(rlp.encode(i.toString()));

    // TODO: replace with spread operators
    let logs = receipt.logs.map((log: any) => {
        return {
            address: log.address,
            topics: log.topics,
            data: log.data
        }
    });

    let receiptToHash = {
        status: receipt.status,
        cumulativeGasUsed: parseInt(receipt.cumulativeGasUsed),
        logs: logs,
        bloom: receipt.logsBloom,
    };

    const value = Buffer.from(Object.values(receiptToHash));
    trie.put(key, value);
}
console.log('receipts tree root pure', trie.root);
console.log('receipts tree root keccak', keccak256(Buffer.from(trie.root)).toString('hex'));


// proof that this txReceipt exists and is with status 0