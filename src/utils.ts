import axios from 'axios';
import { assert } from "chai";
import * as dotenv from "dotenv";
dotenv.config();

assert(process.env.RPC_PROVIDER_URL !== undefined);

axios.defaults.baseURL = process.env.RPC_PROVIDER_URL;

function getParams(method: string, params: any[]): any {
    return { jsonrpc: "2.0", method: method, params: params, id: 1 }
}

export function stripHexPrefixIfNecessary(hexString: string): string {
    return hexString.startsWith("0x") ? hexString.substring(2) : hexString;
}

// eth_getTransactionByHash 
export async function getTransactionByHash(hash: string): Promise<any> {
    return await axios.post('', getParams('eth_getTransactionByHash', [hash]))
        .then((response) => {
            return response.data.result;
        })
        .catch((error) => {
            return error;
        })
}

// eth_getTransactionReceipt 
export async function getTransactionReceipt(hash: string): Promise<any> {
    return await axios.post('', getParams('eth_getTransactionReceipt', [hash]))
        .then((response) => {
            return response.data.result;
        })
        .catch((error) => {
            return error;
        })
}

// eth_getBlockByHash
export async function getBlockByHash(hash: string): Promise<any> {
    return await axios.post('', getParams('eth_getBlockByHash', [hash, false]))
        .then((response) => {
            return response.data.result;
        })
        .catch((error) => {
            return error;
        })
}