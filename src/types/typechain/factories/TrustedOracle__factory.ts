/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrustedOracle, TrustedOracleInterface } from "../TrustedOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    name: "setBlockHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6102d18061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806345db756c1461005c578063715018a6146100715780638da5cb5b14610079578063ee82ac5e14610099578063f2fde38b146100c7575b600080fd5b61006f61006a366004610230565b6100da565b005b61006f6100f4565b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100b96100a7366004610252565b60009081526001602052604090205490565b604051908152602001610090565b61006f6100d536600461026b565b610108565b6100e2610186565b60009182526001602052604090912055565b6100fc610186565b61010660006101e0565b565b610110610186565b6001600160a01b03811661017a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610183816101e0565b50565b6000546001600160a01b031633146101065760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610171565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806040838503121561024357600080fd5b50508035926020909101359150565b60006020828403121561026457600080fd5b5035919050565b60006020828403121561027d57600080fd5b81356001600160a01b038116811461029457600080fd5b939250505056fea26469706673582212201b4953cfe97991bad1daae3c55313449ca06b8f4c7b7670918cc15f401b8479764736f6c63430008140033";

type TrustedOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrustedOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TrustedOracle__factory extends ContractFactory {
  constructor(...args: TrustedOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TrustedOracle> {
    return super.deploy(overrides || {}) as Promise<TrustedOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TrustedOracle {
    return super.attach(address) as TrustedOracle;
  }
  override connect(signer: Signer): TrustedOracle__factory {
    return super.connect(signer) as TrustedOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustedOracleInterface {
    return new utils.Interface(_abi) as TrustedOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrustedOracle {
    return new Contract(address, _abi, signerOrProvider) as TrustedOracle;
  }
}