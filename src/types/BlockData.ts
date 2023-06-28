import { BigNumber } from "ethers";

export type BlockData = {
    parentHash: Uint8Array;
    sha3Uncles: Uint8Array;
    miner: Uint8Array;
    stateRoot: Uint8Array;
    transactionsRoot: Uint8Array;
    receiptsRoot: Uint8Array;
    logsBloom: Uint8Array;
    difficulty: BigNumber;
    number: BigNumber;
    gasLimit: BigNumber;
    gasUsed: BigNumber;
    timestamp: BigNumber;
    extraData: Uint8Array;
    mixHash: Uint8Array;
    nonce: BigNumber;
}