import { TransactionInclusionProver__factory } from './types/typechain/factories/TransactionInclusionProver__factory.js';
import { TransactionInclusionProver } from './types/typechain/TransactionInclusionProver';
import { TrustedOracle__factory } from './types/typechain/factories/TrustedOracle__factory.js';
import { TrustedOracle } from './types/typechain/TrustedOracle';
import { getTransactionByHash, getTransactionReceipt, getBlockByHash } from './utils.js';
import * as dotenv from "dotenv";
import { ethers } from 'ethers';
import { assert } from "chai";
import type { JsonRpcTx } from '@ethereumjs/tx'
import { TxInclusionSDK } from "@limechain/tx-inclusion-sdk";
dotenv.config();

assert(process.env.WALLET_PK !== undefined);
assert(process.env.L1_RPC_PROVIDER_URL !== undefined);
assert(process.env.L2_RPC_PROVIDER_URL !== undefined);
assert(process.env.L2_NETWORK_ID !== undefined);
assert(process.env.ORACLE_ADDRESS !== undefined);
assert(process.env.INCLUSION_PROVER_ADDRESS !== undefined);

const walletPrivateKey = process.env.WALLET_PK;
const rpcUrlL1 = process.env.L1_RPC_PROVIDER_URL;
const rpcUrlL2 = process.env.L2_RPC_PROVIDER_URL;
const chainId = parseInt(process.env.L2_NETWORK_ID);
const oracleAddress = process.env.ORACLE_ADDRESS;
const proverAddress = process.env.INCLUSION_PROVER_ADDRESS;

const txHash = process.argv.slice(2)[0];

// setup rpc provider, wallet, contracts
const rpcProvider = new ethers.providers.JsonRpcProvider(
    rpcUrlL2,
    chainId
);

const wallet = new ethers.Wallet(walletPrivateKey, rpcProvider);

const oracle: TrustedOracle = TrustedOracle__factory.connect(oracleAddress, wallet);
const prover: TransactionInclusionProver = TransactionInclusionProver__factory.connect(proverAddress, wallet);

const txInclusionSdk = new TxInclusionSDK(rpcUrlL1);

console.log("Gather tx data...");
const txData: JsonRpcTx = await getTransactionByHash(txHash);
const txReceipt = await getTransactionReceipt(txHash);

if (parseInt(txReceipt.status) !== 1) throw new Error("Transaction status != success");

console.log("Gather block data...");
const blockData = await getBlockByHash(txData.blockHash);

console.log("Compile tx inclusion proof from SDK...");
const txInclusionProof = await txInclusionSdk.getTransactionInclusionProof(txHash);

console.log("Store block hash to TrustedOracle...");
if (await oracle.getBlockHash(parseInt(blockData.number)) !== blockData.hash) {
    await oracle.setBlockHash(parseInt(blockData.number), blockData.hash);
}

console.log("Verify tx inclusion proof...");
const txLegit = await prover.proveTransactionInclusion(txInclusionProof);
txLegit ? console.log("Success, tx with status Success exists in L1!") : console.log("Failed, tx doesn't exist in L1!");