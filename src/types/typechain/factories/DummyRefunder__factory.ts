/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DummyRefunder, DummyRefunderInterface } from "../DummyRefunder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "proverAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bytes32",
                name: "parentHash",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "sha3Uncles",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "miner",
                type: "address",
              },
              {
                internalType: "bytes32",
                name: "stateRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "transactionsRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "receiptsRoot",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "logsBloom",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "difficulty",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "number",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "gasUsed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "extraData",
                type: "bytes",
              },
              {
                internalType: "bytes32",
                name: "mixHash",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
            ],
            internalType: "struct BlockData",
            name: "blockData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "status",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "cumulativeGasUsed",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "bitvector",
                type: "bytes",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "logAddress",
                    type: "address",
                  },
                  {
                    internalType: "bytes32[]",
                    name: "topics",
                    type: "bytes32[]",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct Log[]",
                name: "logs",
                type: "tuple[]",
              },
            ],
            internalType: "struct Receipt",
            name: "txReceipt",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "receiptProofBranch",
            type: "bytes32[]",
          },
        ],
        internalType: "struct ProverDto",
        name: "data",
        type: "tuple",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007357601f61012e38819003918201601f19168301916001600160401b038311848410176100785780849260209460405283398101031261007357516001600160a01b0381169081900361007357600080546001600160a01b031916919091179055604051609f908161008f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080806040526004361015601257600080fd5b600090813560e01c634801d8d414602857600080fd5b34605d576003196020368201126065576004359067ffffffffffffffff821160615760809136030112605d5780600160209252f35b5080fd5b8380fd5b8280fdfea2646970667358221220cedbe2e5fe3f1ef9fe951692a392ff3b0014f98c965a7683eccd55201abc4bc264736f6c63430008140033";

type DummyRefunderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyRefunderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyRefunder__factory extends ContractFactory {
  constructor(...args: DummyRefunderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proverAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<DummyRefunder> {
    return super.deploy(
      proverAddress,
      overrides || {}
    ) as Promise<DummyRefunder>;
  }
  override getDeployTransaction(
    proverAddress: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(proverAddress, overrides || {});
  }
  override attach(address: string): DummyRefunder {
    return super.attach(address) as DummyRefunder;
  }
  override connect(signer: Signer): DummyRefunder__factory {
    return super.connect(signer) as DummyRefunder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyRefunderInterface {
    return new utils.Interface(_abi) as DummyRefunderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyRefunder {
    return new Contract(address, _abi, signerOrProvider) as DummyRefunder;
  }
}