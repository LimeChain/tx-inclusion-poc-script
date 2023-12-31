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

export type TxLogStruct = {
  addr: string;
  topics: BytesLike[];
  data: BytesLike;
};

export type TxLogStructOutput = [string, string[], string] & {
  addr: string;
  topics: string[];
  data: string;
};

export type TxReceiptStruct = {
  receiptType: BigNumberish;
  postStateOrStatus: BigNumberish;
  cumulativeGasUsed: BigNumberish;
  keyIndex: BytesLike;
  bloom: BytesLike;
  logs: TxLogStruct[];
};

export type TxReceiptStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string,
  TxLogStructOutput[]
] & {
  receiptType: BigNumber;
  postStateOrStatus: BigNumber;
  cumulativeGasUsed: BigNumber;
  keyIndex: string;
  bloom: string;
  logs: TxLogStructOutput[];
};

export type ProverDtoStruct = {
  blockData: BlockDataStruct;
  txReceipt: TxReceiptStruct;
  blockNumber: BigNumberish;
  receiptProofBranch: BytesLike[];
};

export type ProverDtoStructOutput = [
  BlockDataStructOutput,
  TxReceiptStructOutput,
  BigNumber,
  string[]
] & {
  blockData: BlockDataStructOutput;
  txReceipt: TxReceiptStructOutput;
  blockNumber: BigNumber;
  receiptProofBranch: string[];
};

export interface TransactionInclusionProverInterface extends utils.Interface {
  functions: {
    "proveTransactionInclusion(((bytes32,bytes32,address,bytes32,bytes32,bytes32,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes32,bytes,uint256,bytes32),(uint256,uint256,uint256,bytes,bytes,(address,bytes[],bytes)[]),uint256,bytes[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "proveTransactionInclusion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "proveTransactionInclusion",
    values: [ProverDtoStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "proveTransactionInclusion",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TransactionInclusionProver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransactionInclusionProverInterface;

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
    proveTransactionInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  proveTransactionInclusion(
    data: ProverDtoStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    proveTransactionInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    proveTransactionInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    proveTransactionInclusion(
      data: ProverDtoStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
