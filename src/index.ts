import { DummyRefunder__factory } from './types/typechain/factories/DummyRefunder__factory.js';
import { DummyRefunder } from './types/typechain/DummyRefunder';
import { TrustedOracle__factory } from './types/typechain/factories/TrustedOracle__factory.js';
import { TrustedOracle } from './types/typechain/TrustedOracle';
import { getTransactionByHash, getTransactionReceipt, getBlockByHash } from './utils.js';
import * as dotenv from "dotenv";
import { ethers } from 'ethers';
import { assert } from "chai";
import type { JsonRpcTx } from '@ethereumjs/tx'
import { getTransactionInclusionProof } from "tx-inclusion-sdk";
dotenv.config();

assert(process.env.WALLET_PK !== undefined);
assert(process.env.RPC_URL !== undefined);
assert(process.env.NETWORK_ID !== undefined);
assert(process.env.ORACLE_ADDRESS !== undefined);
assert(process.env.REFUNDER_ADDRESS !== undefined);

const ownerPrivateKey = process.env.WALLET_PK;
const rpcUrl = process.env.RPC_URL;
const chainId = parseInt(process.env.NETWORK_ID);
const oracleAddress = process.env.ORACLE_ADDRESS;
const refunderAddress = process.env.REFUNDER_ADDRESS;

const txHash = process.argv.slice(2)[0];

// setup provider, wallet, contracts
const provider = new ethers.providers.JsonRpcProvider(
    rpcUrl,
    chainId
);

const wallet = new ethers.Wallet(ownerPrivateKey, provider);

const oracleContract: TrustedOracle = TrustedOracle__factory.connect(oracleAddress, wallet);
const refunder: DummyRefunder = DummyRefunder__factory.connect(refunderAddress, wallet);

// gather data
const txData: JsonRpcTx = await getTransactionByHash(txHash);
const txReceipt = await getTransactionReceipt(txHash);

// check tx status == 0
if (parseInt(txReceipt.status) !== 1) throw new Error("tx status is not successfull");

const blockData = await getBlockByHash(txData.blockHash);

await oracleContract.setBlockHash(parseInt(blockData.number), blockData.hash);

const txInclusionProof = await getTransactionInclusionProof(txHash);

console.log(await refunder.claim(txInclusionProof) ? "Refund successful!" : "Refund failed, transaction doesn't exist!");