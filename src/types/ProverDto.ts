import { BlockData } from "./BlockData";
import { Receipt } from "./Receipt";

export type ProverDto = {
    blockData: BlockData;
    txReceipt: Receipt;
    blockNumber: number;
    receiptProofBranch: Uint8Array[];
}