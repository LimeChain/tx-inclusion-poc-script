import { Log } from "./Log";

export type Receipt = {
    status: boolean;
    cumulativeGasUsed: number;
    bitvector: Uint8Array;
    logs: Log[];
}