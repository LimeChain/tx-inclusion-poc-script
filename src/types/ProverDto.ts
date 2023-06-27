import { BlockData } from "./BlockData";

export type ProverDto = {
    blockNumber: number;
    blockHash: Uint8Array;
    receiptProofBranch: Uint8Array[];
    receiptRoot: Uint8Array;
    txIndex: number;
    blockData: BlockData;
}