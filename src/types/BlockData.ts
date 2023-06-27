export type BlockData = {
    parentHash: Uint8Array;
    sha3Uncles: Uint8Array;
    miner: Uint8Array;
    stateRoot: Uint8Array;
    transactionsRoot: Uint8Array;
    receiptsRoot: Uint8Array;
    logsBloom: Uint8Array;
    difficulty: number;
    number: number;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    extraData: Uint8Array;
    mixHash: Uint8Array;
    nonce: number;
}