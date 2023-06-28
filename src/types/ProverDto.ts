import { BigNumber } from "ethers";
import { BlockData } from "./BlockData";
import { Receipt } from "./Receipt";

export type ProverDto = {
    blockData: BlockData;
    txReceipt: Receipt;
    blockNumber: BigNumber;
    receiptProofBranch: Uint8Array[];
}