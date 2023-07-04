/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface IBlockhashStorageInterface extends utils.Interface {
  functions: {
    "getBlockHash(uint256)": FunctionFragment;
    "setBlockHash(uint256,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getBlockHash" | "setBlockHash"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBlockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBlockHash",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBlockHash",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBlockhashStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBlockhashStorageInterface;

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
    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setBlockHash(
      blockNumber: BigNumberish,
      blockHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  getBlockHash(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setBlockHash(
    blockNumber: BigNumberish,
    blockHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setBlockHash(
      blockNumber: BigNumberish,
      blockHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBlockHash(
      blockNumber: BigNumberish,
      blockHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBlockHash(
      blockNumber: BigNumberish,
      blockHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}