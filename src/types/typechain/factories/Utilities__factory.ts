/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Utilities, UtilitiesInterface } from "../Utilities";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_TEST",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "assertSemiEq",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "bytesSignatureFromString",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable[]",
        name: "users",
        type: "address[]",
      },
    ],
    name: "convertUsersToUnpayable",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userNum",
        type: "uint256",
      },
    ],
    name: "createUsers",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_epsilon",
        type: "uint256",
      },
    ],
    name: "epsilon",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeArtifacts",
    outputs: [
      {
        internalType: "string[]",
        name: "excludedArtifacts_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "excludedContracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "excludedSenders_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "failed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextUserAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "makeSignatureFromVRS",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numBlocks",
        type: "uint256",
      },
    ],
    name: "mineBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "privateKey",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "signMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "targetArtifactSelectors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzSelector[]",
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetArtifacts",
    outputs: [
      {
        internalType: "string[]",
        name: "targetedArtifacts_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "targetedContracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetSelectors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzSelector[]",
        name: "targetedSelectors_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "targetedSenders_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60008054600160ff1991821681179092556004805490911690911790556b75736572206164647265737360a01b60a052600c60805260ac6040527ffadd6953a0436e85528ded789af2e2b7e57c1cd7c68c5c3796d8ea67e0018db7601b5534801561006957600080fd5b50611dbb806100796000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063916a17c6116100ad578063c23580cd11610071578063c23580cd14610249578063cb1c5e601461025c578063e20c9f711461026f578063f82de7b014610277578063fa7626d41461028a57600080fd5b8063916a17c6146101e757806391df0ed8146101ef578063b5508aa914610202578063b90a68fa1461020a578063ba414fa61461023157600080fd5b80634b3cbbde116100f45780634b3cbbde1461016957806366d9a9a014610189578063792e11f51461019e57806385226c81146101bf57806387462db6146101d457600080fd5b80631ed7831c14610126578063381314c8146101445780633e5e3c23146101595780633f7286f414610161575b600080fd5b61012e610297565b60405161013b91906115d8565b60405180910390f35b610157610152366004611625565b6102f9565b005b61012e610315565b61012e610375565b61017c61017736600461168e565b6103d5565b60405161013b9190611773565b610191610527565b60405161013b9190611786565b6101b16101ac366004611839565b610616565b60405161013b929190611852565b6101c76108c8565b60405161013b91906118d6565b61017c6101e236600461194a565b610998565b6101916109db565b61017c6101fd366004611625565b610ac1565b6101c7610b63565b610212610c33565b604080516001600160a01b03909316835260208301919091520161013b565b610239610c89565b604051901515815260200161013b565b61012e610257366004611994565b610db4565b61023961026a366004611a46565b610e67565b61012e610e90565b610157610285366004611839565b610ef0565b6000546102399060ff1681565b6060600d8054806020026020016040519081016040528092919081815260200182805480156102ef57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102d1575b5050505050905090565b6032610310610309848484610e67565b6001610f68565b505050565b6060600f8054806020026020016040519081016040528092919081815260200182805480156102ef576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116102d1575050505050905090565b6060600e8054806020026020016040519081016040528092919081815260200182805480156102ef576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116102d1575050505050905090565b805160609082906103e890600290611a88565b156103f257600080fd5b60006001600283516104049190611ab2565b61040e9190611ac6565b67ffffffffffffffff81111561042657610426611647565b6040519080825280601f01601f191660200182016040528015610450576020820181803683370190505b50905060005b6001600284516104669190611ab2565b6104709190611ac6565b81101561051f576000610484826001611ad9565b90506104bd84610495836002611aec565b6104a0906001611ad9565b815181106104b0576104b0611b03565b016020015160f81c6110e9565b6104cc856104a0846002611aec565b6104d7906010611b19565b6104e19190611b35565b60f81b8383815181106104f6576104f6611b03565b60200101906001600160f81b031916908160001a905350508061051890611b4e565b9050610456565b509392505050565b60606012805480602002602001604051908101604052809291908181526020016000905b8282101561060d5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156105f557602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116105b75790505b5050505050815250508152602001906001019061054b565b50505050905090565b60608060008367ffffffffffffffff81111561063457610634611647565b60405190808252806020026020018201604052801561065d578160200160208202803683370190505b50905060008467ffffffffffffffff81111561067b5761067b611647565b6040519080825280602002602001820160405280156106a4578160200160208202803683370190505b50905060005b858110156108bd57600080306001600160a01b031663b90a68fa6040518163ffffffff1660e01b815260040160408051808303816000875af11580156106f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107189190611b67565b60405163c88a5e6d60e01b81526001600160a01b038316600482015268056bc75e2d6310000060248201529193509150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c88a5e6d90604401600060405180830381600087803b15801561078157600080fd5b505af1158015610795573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063c657c718915084905085156107e8576107e3604051806040016040528060048152602001633ab9b2b960e11b815250876111ff565b610807565b6040518060400160405280600581526020016437bbb732b960d91b8152505b6040518363ffffffff1660e01b8152600401610824929190611b95565b600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050508185848151811061086957610869611b03565b60200260200101906001600160a01b031690816001600160a01b0316815250508084848151811061089c5761089c611b03565b602002602001018181525050505080806108b590611b4e565b9150506106aa565b509094909350915050565b60606011805480602002602001604051908101604052809291908181526020016000905b8282101561060d57838290600052602060002001805461090b90611bc1565b80601f016020809104026020016040519081016040528092919081815260200182805461093790611bc1565b80156109845780601f1061095957610100808354040283529160200191610984565b820191906000526020600020905b81548152906001019060200180831161096757829003601f168201915b5050505050815260200190600101906108ec565b60408051604180825260808201909252606091600091906020820181803683375050506041810186905260208101859052604081018490529150505b9392505050565b60606013805480602002602001604051908101604052809291908181526020016000905b8282101561060d5760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015610aa957602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411610a6b5790505b505050505081525050815260200190600101906109ff565b6040516338d07aa960e21b8152600481018390526024810182905260609060009081908190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063e341eaa490604401606060405180830381865afa158015610b22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b469190611bfb565b925092509250610b57838383610998565b93505050505b92915050565b60606010805480602002602001604051908101604052809291908181526020016000905b8282101561060d578382906000526020600020018054610ba690611bc1565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd290611bc1565b8015610c1f5780601f10610bf457610100808354040283529160200191610c1f565b820191906000526020600020905b815481529060010190602001808311610c0257829003601f168201915b505050505081526020019060010190610b87565b600080600080610c4c610c47601b54611334565b6113b6565b91509150601b54604051602001610c6591815260200190565b60408051601f198184030181529190528051602090910120601b5590939092509050565b60008054610100900460ff1615610ca95750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610daf5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610d37917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611c32565b60408051601f1981840301815290829052610d5191611c63565b6000604051808303816000865af19150503d8060008114610d8e576040519150601f19603f3d011682016040523d82523d6000602084013e610d93565b606091505b5091505080806020019051810190610dab9190611c7f565b9150505b919050565b60606000825167ffffffffffffffff811115610dd257610dd2611647565b604051908082528060200260200182016040528015610dfb578160200160208202803683370190505b50905060005b8351811015610e6057838181518110610e1c57610e1c611b03565b6020026020010151828281518110610e3657610e36611b03565b6001600160a01b039092166020928302919091019091015280610e5881611b4e565b915050610e01565b5092915050565b600082841115610e855781610e7c8486611ac6565b111590506109d4565b81610e7c8585611ac6565b6060600c8054806020026020016040519081016040528092919081815260200182805480156102ef576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116102d1575050505050905090565b6000610efc8243611ad9565b6040516301f7b4f360e41b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d90631f7b4f3090602401600060405180830381600087803b158015610f4c57600080fd5b505af1158015610f60573d6000803e3d6000fd5b505050505050565b801515821515146110e5577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f50604051610fdd9060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b626f6f6040820152616c5d60f01b606082015260800190565b60405180910390a17f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35838261102e576040518060400160405280600581526020016466616c736560d81b81525061104c565b604051806040016040528060048152602001637472756560e01b8152505b6040516110599190611ca1565b60405180910390a17f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf3583816110aa576040518060400160405280600581526020016466616c736560d81b8152506110c8565b604051806040016040528060048152602001637472756560e01b8152505b6040516110d59190611cd5565b60405180910390a16110e56114cc565b5050565b6000600360fc1b60f883901b6001600160f81b0319161080159061111f5750603960f81b60f883901b6001600160f81b03191611155b1561112f57610b5d603083611d09565b606160f81b60f883901b6001600160f81b031916108015906111635750603360f91b60f883901b6001600160f81b03191611155b1561117f57606161117583600a611b35565b610b5d9190611d09565b604160f81b60f883901b6001600160f81b031916108015906111b35750602360f91b60f883901b6001600160f81b03191611155b156111c557604161117583600a611b35565b60405162461bcd60e51b81526004016111f69060208082526004908201526319985a5b60e21b604082015260600190565b60405180910390fd5b60608160000361122757506040805180820190915260018152600360fc1b6020820152610b5d565b8160005b8115611251578061123b81611b4e565b915061124a9050600a83611ab2565b915061122b565b60008167ffffffffffffffff81111561126c5761126c611647565b6040519080825280601f01601f191660200182016040528015611296576020820181803683370190505b508593509050815b8315611303576112af600a85611a88565b6112ba906030611ad9565b60f81b826112c783611d22565b925082815181106112da576112da611b03565b60200101906001600160f81b031916908160001a9053506112fc600a85611ab2565b935061129e565b60405187906113189082908590602001611d39565b6040516020818303038152906040529550505050505092915050565b6040805160208082528183019092526060916000919060208201818036833701905050905060005b6020811015610e605783816020811061137757611377611b03565b1a60f81b82828151811061138d5761138d611b03565b60200101906001600160f81b031916908160001a905350806113ae81611b4e565b91505061135c565b600080826040516020016113ca9190611c63565b60408051808303601f190181529082905280516020909101206001625e79b760e01b03198252600482018190529150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa1864990602401602060405180830381865afa158015611435573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114599190611d68565b6040516318caf8e360e31b8152909250737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c657c718906114959085908790600401611b95565b600060405180830381600087803b1580156114af57600080fd5b505af11580156114c3573d6000803e3d6000fd5b50505050915091565b737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156115c75760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f19818403018152908290526115669291602001611c32565b60408051601f198184030181529082905261158091611c63565b6000604051808303816000865af19150503d80600081146115bd576040519150601f19603f3d011682016040523d82523d6000602084013e6115c2565b606091505b505050505b6000805461ff001916610100179055565b6020808252825182820181905260009190848201906040850190845b818110156116195783516001600160a01b0316835292840192918401916001016115f4565b50909695505050505050565b6000806040838503121561163857600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561168657611686611647565b604052919050565b600060208083850312156116a157600080fd5b823567ffffffffffffffff808211156116b957600080fd5b818501915085601f8301126116cd57600080fd5b8135818111156116df576116df611647565b6116f1601f8201601f1916850161165d565b9150808252868482850101111561170757600080fd5b8084840185840137600090820190930192909252509392505050565b60005b8381101561173e578181015183820152602001611726565b50506000910152565b6000815180845261175f816020860160208601611723565b601f01601f19169290920160200192915050565b6020815260006109d46020830184611747565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101561182a57898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156118155783516001600160e01b0319168252928b019260019290920191908b01906117eb565b50978a019795505050918701916001016117ae565b50919998505050505050505050565b60006020828403121561184b57600080fd5b5035919050565b604080825283519082018190526000906020906060840190828701845b828110156118945781516001600160a01b03168452928401929084019060010161186f565b5050508381038285015284518082528583019183019060005b818110156118c9578351835292840192918401916001016118ad565b5090979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561192b57603f19888603018452611919858351611747565b945092850192908501906001016118fd565b5092979650505050505050565b60ff8116811461194757600080fd5b50565b60008060006060848603121561195f57600080fd5b833561196a81611938565b95602085013595506040909401359392505050565b6001600160a01b038116811461194757600080fd5b600060208083850312156119a757600080fd5b823567ffffffffffffffff808211156119bf57600080fd5b818501915085601f8301126119d357600080fd5b8135818111156119e5576119e5611647565b8060051b91506119f684830161165d565b8181529183018401918481019088841115611a1057600080fd5b938501935b83851015611a3a5784359250611a2a8361197f565b8282529385019390850190611a15565b98975050505050505050565b600080600060608486031215611a5b57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601260045260246000fd5b600082611a9757611a97611a72565b500690565b634e487b7160e01b600052601160045260246000fd5b600082611ac157611ac1611a72565b500490565b81810381811115610b5d57610b5d611a9c565b80820180821115610b5d57610b5d611a9c565b8082028115828204841417610b5d57610b5d611a9c565b634e487b7160e01b600052603260045260246000fd5b60ff8181168382160290811690818114610e6057610e60611a9c565b60ff8181168382160190811115610b5d57610b5d611a9c565b600060018201611b6057611b60611a9c565b5060010190565b60008060408385031215611b7a57600080fd5b8251611b858161197f565b6020939093015192949293505050565b6001600160a01b0383168152604060208201819052600090611bb990830184611747565b949350505050565b600181811c90821680611bd557607f821691505b602082108103611bf557634e487b7160e01b600052602260045260246000fd5b50919050565b600080600060608486031215611c1057600080fd5b8351611c1b81611938565b602085015160409095015190969495509392505050565b6001600160e01b0319831681528151600090611c55816004850160208701611723565b919091016004019392505050565b60008251611c75818460208701611723565b9190910192915050565b600060208284031215611c9157600080fd5b815180151581146109d457600080fd5b60408152600a6040820152690808080808081319599d60b21b60608201526080602082015260006109d46080830184611747565b60408152600a6040820152690808080808149a59da1d60b21b60608201526080602082015260006109d46080830184611747565b60ff8281168282160390811115610b5d57610b5d611a9c565b600081611d3157611d31611a9c565b506000190190565b60008351611d4b818460208801611723565b835190830190611d5f818360208801611723565b01949350505050565b600060208284031215611d7a57600080fd5b81516109d48161197f56fea2646970667358221220e6f6eed2d86e40e26f0d01a6bb1451140567ed984520f8e390710d5e1d0d286864736f6c63430008140033";

type UtilitiesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UtilitiesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Utilities__factory extends ContractFactory {
  constructor(...args: UtilitiesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Utilities> {
    return super.deploy(overrides || {}) as Promise<Utilities>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Utilities {
    return super.attach(address) as Utilities;
  }
  override connect(signer: Signer): Utilities__factory {
    return super.connect(signer) as Utilities__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UtilitiesInterface {
    return new utils.Interface(_abi) as UtilitiesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Utilities {
    return new Contract(address, _abi, signerOrProvider) as Utilities;
  }
}
