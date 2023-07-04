/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type BlockDataStruct = {
  parentHash: BytesLike;
  sha3Uncles: BytesLike;
  miner: string;
  stateRoot: BytesLike;
  transactionsRoot: BytesLike;
  receiptsRoot: BytesLike;
  logsBloom: BytesLike;
  difficulty: BigNumberish;
  number: BigNumberish;
  gasLimit: BigNumberish;
  gasUsed: BigNumberish;
  timestamp: BigNumberish;
  extraData: BytesLike;
  mixHash: BytesLike;
  nonce: BytesLike;
  baseFeePerGas: BigNumberish;
  withdrawalsRoot: BytesLike;
};

export type BlockDataStructOutput = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string,
  string,
  BigNumber,
  string
] & {
  parentHash: string;
  sha3Uncles: string;
  miner: string;
  stateRoot: string;
  transactionsRoot: string;
  receiptsRoot: string;
  logsBloom: string;
  difficulty: BigNumber;
  number: BigNumber;
  gasLimit: BigNumber;
  gasUsed: BigNumber;
  timestamp: BigNumber;
  extraData: string;
  mixHash: string;
  nonce: string;
  baseFeePerGas: BigNumber;
  withdrawalsRoot: string;
};

export type LogStruct = {
  logAddress: string;
  topics: BytesLike[];
  data: BytesLike;
};

export type LogStructOutput = [string, string[], string] & {
  logAddress: string;
  topics: string[];
  data: string;
};

export type ReceiptStruct = {
  status: boolean;
  cumulativeGasUsed: BigNumberish;
  bitvector: BytesLike;
  logs: LogStruct[];
};

export type ReceiptStructOutput = [
  boolean,
  BigNumber,
  string,
  LogStructOutput[]
] & {
  status: boolean;
  cumulativeGasUsed: BigNumber;
  bitvector: string;
  logs: LogStructOutput[];
};

export type ProverDtoStruct = {
  blockData: BlockDataStruct;
  txReceipt: ReceiptStruct;
  blockNumber: BigNumberish;
  receiptProofBranch: BytesLike[];
};

export type ProverDtoStructOutput = [
  BlockDataStructOutput,
  ReceiptStructOutput,
  BigNumber,
  string[]
] & {
  blockData: BlockDataStructOutput;
  txReceipt: ReceiptStructOutput;
  blockNumber: BigNumber;
  receiptProofBranch: string[];
};

export interface ReceiptInclusionProverInterface extends utils.Interface {
  functions: {
    "proveReceiptInclusion(((bytes32,bytes32,address,bytes32,bytes32,bytes32,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes32,bytes,uint256,bytes32),(bool,uint256,bytes,(address,bytes32[],bytes)[]),uint256,bytes32[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "proveReceiptInclusion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "proveReceiptInclusion",
    values: [ProverDtoStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "proveReceiptInclusion",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ReceiptInclusionProver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReceiptInclusionProverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    proveReceiptInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  proveReceiptInclusion(
    data: ProverDtoStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    proveReceiptInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    proveReceiptInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    proveReceiptInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
