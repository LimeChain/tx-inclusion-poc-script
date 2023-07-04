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
                internalType: "bytes",
                name: "nonce",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "baseFeePerGas",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "withdrawalsRoot",
                type: "bytes32",
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
  "0x608060405234801561001057600080fd5b506040516105f63803806105f683398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610563806100936000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806356b923ff14610030575b600080fd5b61004361003e3660046100cf565b610057565b604051901515815260200160405180910390f35b600080546040516309197fdf60e11b81526001600160a01b0390911690631232ffbe9061008890859060040161035a565b602060405180830381865afa1580156100a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c99190610510565b92915050565b6000602082840312156100e157600080fd5b813567ffffffffffffffff8111156100f857600080fd5b82016080818503121561010a57600080fd5b9392505050565b80356001600160a01b038116811461012857600080fd5b919050565b6000808335601e1984360301811261014457600080fd5b830160208101925035905067ffffffffffffffff81111561016457600080fd5b80360382131561017357600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008235607e198336030181126101b957600080fd5b90910192915050565b80151581146101d057600080fd5b50565b6000808335601e198436030181126101ea57600080fd5b830160208101925035905067ffffffffffffffff81111561020a57600080fd5b8060051b360382131561017357600080fd5b81835260006001600160fb1b0383111561023557600080fd5b8260051b80836020870137939093016020019392505050565b6000813561025b816101c2565b151583526020828101358185015260406102778185018561012d565b60808388015261028b60808801828461017a565b915050606061029c818701876101d3565b888403838a0152808452858401600582901b85018701836000805b8581101561034857888403601f19018552823536889003605e190181126102dc578283fd5b87016001600160a01b036102ef82610111565b1685526102fe8c8201826101d3565b8a8e8801526103108b8801828461021c565b91505061031f8c83018361012d565b92508682038d88015261033382848361017a565b978e019796505050928b0192506001016102b7565b50919c9b505050505050505050505050565b602081526000823561021e1984360301811261037557600080fd5b838101905060806020840152803560a0840152602081013560c084015261039e60408201610111565b6001600160a01b03811660e08501525061010060608201358185015261012060808301358186015261014060a0840135818701526103df60c085018561012d565b61022061016081818b01526103f96102c08b01848661017a565b9350610180925060e0880135838b01526101a087890135818c01526101c0975086890135888c01526101e0965085890135878c0152610200955081890135868c0152610447848a018a61012d565b94509150609f19808c870301848d015261046286868561017a565b9550818a01356102408d015261047a898b018b61012d565b99509450808c8703016102608d01525050505061049882868361017a565b9386013561028089015250508301356102a086015290506104bc60208601866101a3565b9150601f19808583030160408601526104d5828461024e565b9250604086013560608601526104ee60608701876101d3565b92508186850301608087015261050584848361021c565b979650505050505050565b60006020828403121561052257600080fd5b815161010a816101c256fea2646970667358221220e2d2af002c1248486e5f0b3e187da1f506f4f495d647892186203a53270336eb64736f6c63430008140033";

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
