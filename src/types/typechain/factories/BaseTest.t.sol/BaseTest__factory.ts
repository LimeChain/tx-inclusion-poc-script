/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseTest,
  BaseTestInterface,
} from "../../BaseTest.t.sol/BaseTest";

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
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x6080806040523461002d57600160ff19818160005416176000556004541617600455612c9290816100338239f35b600080fdfe6080806040526004908136101561001557600080fd5b600091823560e01c9182630a9254e414610924575081631ed7831c146108a55781633e5e3c23146108265781633f7286f4146107a757816366d9a9a01461062a57816385226c8114610507578163916a17c6146102ac578163b5508aa91461017557508063ba414fa614610150578063e20c9f71146100c15763fa7626d41461009d57600080fd5b346100be57806003193601126100be5760ff60209154166040519015158152f35b80fd5b50346100be57806003193601126100be57604051600c80548083529083526020808301937fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c792915b8282106101305761012c8561012081890382610d31565b60405191829182610b66565b0390f35b83546001600160a01b031686529485019460019384019390910190610109565b50346100be57806003193601126100be57602061016b610d53565b6040519015158152f35b82346100be57806003193601126100be5760105461019281610e8b565b916101a06040519384610d31565b818352601081528060207f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6728186015b8584106101e4576040518061012c8982610c85565b604051859183549160019280841c9084811680156102a2575b888310811461028e5782845288949392918115610272575060011461023a575b5061022c816001960382610d31565b8152019201930192906101cf565b868a52838a20955089905b80821061025b575081018301945061022c61021d565b865483830186015295850195889490910190610245565b60ff19168584015250151560051b81018301945061022c61021d565b50634e487b7160e01b8a5260228d5260248afd5b91607f16916101fd565b82346100be57806003193601126100be576013546102c981610e8b565b906102d76040519283610d31565b80825260138352827f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a090602084015b83831061031a576040518061012c8782610baa565b60405161032681610cff565b82546001600160a01b031681526040516001840180548083529089526020808a20908301918a915b81600784011061049957846001979460029794602097946103b194549181811061047d575b818110610461575b818110610445575b818110610429575b81811061040d575b8181106103f1575b8181106103d7575b106103c3575b500382610d31565b83820152815201920192019190610305565b6001600160e01b031916815286018e6103a9565b828a1b6001600160e01b0319168452928901928b016103a3565b604083901b6001600160e01b0319168452928901928b0161039b565b606083901b6001600160e01b0319168452928901928b01610393565b608083901b6001600160e01b0319168452928901928b0161038b565b60a083901b6001600160e01b0319168452928901928b01610383565b60c083901b6001600160e01b0319168452928901928b0161037b565b60e083901b6001600160e01b0319168452928901928b01610373565b926001610100600892865463ffffffff60e01b90818160e01b16835260c08282821b16602085015260a08383821b1660408601526080848460608282851b16818a01521b1690860152838360401b1690850152828260201b16908401521660e082015201940192019161034e565b82346100be57806003193601126100be5760115461052481610e8b565b916105326040519384610d31565b818352601181528060207f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c688186015b858410610576576040518061012c8982610c85565b604051859183549160019280841c908481168015610620575b888310811461028e578284528894939291811561060457506001146105cc575b506105be816001960382610d31565b815201920193019290610561565b868a52838a20955089905b8082106105ed57508101830194506105be6105af565b8654838301860152958501958894909101906105d7565b60ff19168584015250151560051b8101830194506105be6105af565b91607f169161058f565b82346100be57806003193601126100be5760125461064781610e8b565b906106556040519283610d31565b80825260128352827fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444602084015b838310610698576040518061012c8782610baa565b6040516106a481610cff565b82546001600160a01b031681526040516001840180548083529089526020808a20908301918a915b816007840110610739578460019794600297946020979461072794549181811061047d5781811061046157818110610445578181106104295781811061040d578181106103f1578181106103d757106103c357500382610d31565b83820152815201920192019190610683565b926001610100600892865463ffffffff60e01b90818160e01b16835260c08282821b16602085015260a08383821b1660408601526080848460608282851b16818a01521b1690860152838360401b1690850152828260201b16908401521660e08201520194019201916106cc565b82346100be57806003193601126100be57604051600e80548083529083526020808301937fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd92915b8282106108065761012c8561012081890382610d31565b83546001600160a01b0316865294850194600193840193909101906107ef565b82346100be57806003193601126100be57604051600f80548083529083526020808301937f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac80292915b8282106108855761012c8561012081890382610d31565b83546001600160a01b03168652948501946001938401939091019061086e565b82346100be57806003193601126100be57604051600d80548083529083526020808301937fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb592915b8282106109045761012c8561012081890382610d31565b83546001600160a01b0316865294850194600193840193909101906108ed565b839034610b625781600319360112610b6257611d769081810167ffffffffffffffff9282821084831117610b4f57908291610ee78339039083f0928315610b445760018060a01b038094169383600360246bffffffffffffffffffffffff60a01b948886601b541617601b5583604051998a94859363792e11f560e01b85528401525af1928315610b395784958594610a22575b50506109f185826109cc610a1b9798610ea3565b511684601c541617601c55826109e182610ec6565b511684601d541617601d55610ed6565b511690601e541617601e55610a0581610ea3565b51601f55610a1281610ec6565b51602055610ed6565b5160215580f35b935094503d8085853e610a358185610d31565b830192604081850312610b35578051868111610b0d5781019584601f88011215610b0d57865191610a6583610e8b565b97610a73604051998a610d31565b83895260209384808b019160051b83010191888311610b31578501905b828210610b155750505082810151918211610b1157019380601f86011215610b0d578451610abd81610e8b565b95610acb6040519788610d31565b818752838088019260051b820101928311610b09578301905b828210610afa57505050506109f1610a1b6109b8565b81518152908301908301610ae4565b8780fd5b8580fd5b8680fd5b81518781168103610b2d578152908501908501610a90565b8a80fd5b8980fd5b8480fd5b6040513d86823e3d90fd5b6040513d84823e3d90fd5b634e487b7160e01b855260418652602485fd5b5080fd5b6020908160408183019282815285518094520193019160005b828110610b8d575050505090565b83516001600160a01b031685529381019392810192600101610b7f565b602080820190808352835180925260409283810182858560051b840101960194600080935b868510610be157505050505050505090565b909192939480969798603f198382030186528951826060818885019360018060a01b038151168652015193888382015284518094520192019085905b808210610c3e5750505090806001929a019501950193969594929190610bcf565b82516001600160e01b03191684528a94938401939092019160019190910190610c1d565b60005b838110610c755750506000910152565b8181015183820152602001610c65565b602080820190808352835180925260408301928160408460051b8301019501936000915b848310610cb95750505050505090565b909192939495848080600193603f198682030187528a51610ce581518092818552858086019101610c62565b601f01601f19160101980196959491909101920190610ca9565b6040810190811067ffffffffffffffff821117610d1b57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610d1b57604052565b6000805460081c60ff1615610d6c575460081c60ff1690565b80737109709ecfa91a80626ff3989d68f67f5b1dd12d803b610d8d57505090565b60408051602081018381526519985a5b195960d21b8284015291815292935067ffffffffffffffff92606081019084821181831017610e7757918582610e0760248397959684976040526080810195630667f9d760e41b8752610df7825180926084850190610c62565b8101036004810184520182610d31565b51925af1503d15610e6f573d908111610e5b5760405190610e32601f8201601f191660200183610d31565b81523d82602083013e5b602081805181010312610b6257602001519081151582036100be575090565b634e487b7160e01b82526041600452602482fd5b506060610e3c565b634e487b7160e01b86526041600452602486fd5b67ffffffffffffffff8111610d1b5760051b60200190565b805115610eb05760200190565b634e487b7160e01b600052603260045260246000fd5b805160011015610eb05760400190565b805160021015610eb0576060019056fe60803461007957600160ff19818160005416176000556004541617600455602081016b75736572206164647265737360a01b8152600c8252604082019180831060018060401b038411176100635782604052519020601b55611cf7908161007f8239f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80631ed7831c14610147578063381314c8146101425780633e5e3c231461013d5780633f7286f4146101385780634b3cbbde1461013357806366d9a9a01461012e578063792e11f51461012957806385226c811461012457806387462db61461011f578063916a17c61461011a57806391df0ed814610115578063b5508aa914610110578063b90a68fa1461010b578063ba414fa614610106578063c23580cd14610101578063cb1c5e60146100fc578063e20c9f71146100f7578063f82de7b0146100f25763fa7626d4146100ed57600080fd5b61146f565b6113f2565b61136e565b61134a565b6112b6565b611268565b6110dc565b610fac565b610eed565b610d9a565b610d56565b610c04565b6109db565b61067a565b610540565b6103bb565b610337565b610234565b6101a0565b600091031261015757565b600080fd5b6020908160408183019282815285518094520193019160005b828110610183575050505090565b83516001600160a01b031685529381019392810192600101610175565b346101575760003660031901126101575760405180600d5491828152602080910192600d6000527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5916000905b8282106102145761021085610204818903826104a6565b6040519182918261015c565b0390f35b83546001600160a01b0316865294850194600193840193909101906101ed565b3461015757604036600319011261015757610253602435600435611b20565b60018115150361025f57005b7f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f50608060405160208152602260208201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b626f6f6040820152616c5d60f01b6060820152a115610327576103006102d2611b91565b604051807f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf358393849382611bb1565b0390a161031a61030e611b91565b60405191829182611be3565b0390a1610325611c15565b005b610300610332611b70565b6102d2565b346101575760003660031901126101575760405180600f5491828152602080910192600f6000527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802916000905b82821061039b5761021085610204818903826104a6565b83546001600160a01b031686529485019460019384019390910190610384565b346101575760003660031901126101575760405180600e5491828152602080910192600e6000527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd916000905b82821061041f5761021085610204818903826104a6565b83546001600160a01b031686529485019460019384019390910190610408565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761047157604052565b61043f565b67ffffffffffffffff811161047157604052565b6080810190811067ffffffffffffffff82111761047157604052565b90601f8019910116810190811067ffffffffffffffff82111761047157604052565b67ffffffffffffffff811161047157601f01601f191660200190565b60005b8381106104f75750506000910152565b81810151838201526020016104e7565b90602091610520815180928185528580860191016104e4565b601f01601f1916010190565b90602061053d928181520190610507565b90565b346101575760203660031901126101575760043567ffffffffffffffff811161015757366023820112156101575780600401359061057d826104c8565b61058a60405191826104a6565b82815236602484840101116101575760006020846102109560246105b6960183860137830101526118eb565b6040519182918261052c565b602080820190808352835180925260409283810182858560051b840101960194600080935b8685106105f957505050505050505090565b909192939480969798603f198382030186528951826060818885019360018060a01b038151168652015193888382015284518094520192019085905b8082106106565750505090806001929a0195019501939695949291906105e7565b82516001600160e01b03191684528a94938401939092019160019190910190610635565b34610157576000366003190112610157576012546106978161128d565b6106a460405191826104a6565b818152601260009081529160207fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec34448184015b8386106106eb576040518061021087826105c2565b826040516106f881610455565b83546001600160a01b03168152604051600185018054808352610725602084015b92600052602060002090565b906000915b816007840110610886579386600297969482946107919460019b98549184828210610865575b828210610848575b82821061082b575b82821061080e575b8282106107f1575b8282106107d4575b8282106107b8575b50106107a3575b50905003826104a6565b838201528152019201950194906106d6565b6001600160e01b031916815201869038610787565b83811b6001600160e01b031916855290938d9101930184610780565b6001600160e01b0319604085901b168552909301928c0184610778565b6001600160e01b0319606085901b168552909301928c0184610770565b6001600160e01b0319608085901b168552909301928c0184610768565b6001600160e01b031960a085901b168552909301928c0184610760565b6001600160e01b031960c085901b168552909301928c0184610758565b8461087d8f93968660e01b63ffffffff60e01b169052565b01930184610750565b939495509091600161010060089261095087548d60e06108b08584831b63ffffffff60e01b169052565b6001600160e01b031960c084811b82168488015260a085811b83166040890152919361093f929091859187919061092d906109168c86866060926080906109058582018585851b1663ffffffff60e01b169052565b01921b1663ffffffff60e01b169052565b6001600160e01b0319604085901b861616908c0152565b8901921b1663ffffffff60e01b169052565b8401911663ffffffff60e01b169052565b019401920190889594939261072a565b6040810190604081528251809252606081019160208094019060005b8181106109be575050508281830391015281808451928381520193019160005b8281106109aa575050505090565b83518552938101939281019260010161099c565b82516001600160a01b03168552938501939185019160010161097c565b3461015757602036600319011261015757600480356109f9816116b5565b610a02826116b5565b9260005b838110610a1c5760405180610210878683610960565b6040908151635c85347d60e11b8152828185816000305af1908115610b43576000908192610b72575b50737109709ecfa91a80626ff3989d68f67f5b1dd12d93843b1561015757805163c88a5e6d60e01b81526001600160a01b03831687820190815268056bc75e2d631000006020820152600090829081906040010381838a5af18015610b4357610b5f575b5083610b4857610ab761171c565b905b853b15610157576000958692610ae392519788809481936318caf8e360e31b8352888d84016115f7565b03925af1908115610b4357610b2594610b1592610b2a575b50610b06848861173d565b6001600160a01b039091169052565b610b1f828861173d565b5261167a565b610a06565b80610b37610b3d92610476565b8061014c565b38610afb565b6115eb565b610b5984610b546116fc565b61176c565b90610ab9565b80610b37610b6c92610476565b38610aa9565b9050610b949150833d8511610b9b575b610b8c81836104a6565b8101906116dd565b9038610a45565b503d610b82565b602080820190808352835180925260408301928160408460051b8301019501936000915b848310610bd65750505050505090565b9091929394958480610bf4600193603f198682030187528a51610507565b9801930193019194939290610bc6565b3461015757600080600319360112610d4857601154610c228161128d565b90604090610c32825193846104a6565b808352601184527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c68938060208086015b848310610c76578551806102108982610ba2565b8551849189549160019280841c90848116908115610d3e575b8783108214610d2a57828452879493929160208401918115610d115750600114610cd2575b5050610cc48160019603826104a6565b815201980192019196610c62565b9550610ce38d600052602060002090565b9089915b818310610cfe5750509490940193610cc481610cb4565b8054888401528895909201918601610ce7565b60ff191682525090151560051b019450610cc481610cb4565b634e487b7160e01b8a52602260045260248afd5b91607f1691610c8f565b80fd5b60ff81160361015757565b3461015757606036600319011261015757610210610d86600435610d7981610d4b565b60443590602435906119de565b604051918291602083526020830190610507565b3461015757600036600319011261015757601354610db78161128d565b610dc460405191826104a6565b818152601360009081529160207f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a0908184015b838610610e0b576040518061021087826105c2565b82604051610e1881610455565b83546001600160a01b03168152604051600185018054808352610e3d60208401610719565b906000915b816007840110610eb357938660029796948294610ea19460019b98549184828210610865578282106108485782821061082b5782821061080e578282106107f1578282106107d4578282106107b85750106107a35750905003826104a6565b83820152815201920195019490610df6565b9394955090916001610100600892610edd87548d60e06108b08584831b63ffffffff60e01b169052565b0194019201908895949392610e42565b34610157576040366003190112610157576040516338d07aa960e21b815260043560048201526024356024820152606081604481737109709ecfa91a80626ff3989d68f67f5b1dd12d5afa908115610b4357600080918193610f58575b6102106105b68585856119de565b925090506060823d8211610fa4575b81610f74606093836104a6565b81010312610d4857506105b6816102109251610f8f81610d4b565b60406020830151920151909190935091610f4a565b3d9150610f67565b3461015757600080600319360112610d4857601054610fca8161128d565b90604090610fda825193846104a6565b808352601084527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672938060208086015b84831061101e578551806102108982610ba2565b8551849189549160019280841c908481169081156110d2575b8783108214610d2a578284528794939291602084019181156110b9575060011461107a575b505061106c8160019603826104a6565b81520198019201919661100a565b955061108b8d600052602060002090565b9089915b8183106110a6575050949094019361106c8161105c565b805488840152889590920191860161108f565b60ff191682525090151560051b01945061106c8161105c565b91607f1691611037565b3461015757600080600319360112610d4857601b54906110fa611619565b815b6020811061124c57506040519160208301836111188285611492565b039361112c601f19958681018352826104a6565b5190206040516001625e79b760e01b031981526004810182905290939092737109709ecfa91a80626ff3989d68f67f5b1dd12d90602085602481855afa948515610b4357849561121c575b50813b156112185783916111a2916040519586809481936318caf8e360e31b83528a600484016115f7565b03925af1918215610b43576111e992611205575b50601b54906111e160405191826111d560208201958660209181520190565b039081018352826104a6565b519020601b55565b604080516001600160a01b039290921682526020820192909252f35b80610b3761121292610476565b846111b6565b8380fd5b61123e91955060203d8111611245575b61123681836104a6565b8101906115d6565b9386611177565b503d61122c565b8084611263921a61125d828561169f565b5361167a565b6110fc565b34610157576000366003190112610157576020611283611517565b6040519015158152f35b67ffffffffffffffff81116104715760051b60200190565b6001600160a01b0381160361015757565b34610157576020806003193601126101575760043567ffffffffffffffff81116101575736602382011215610157578060040135906112f48261128d565b9161130260405193846104a6565b80835260248484019160051b8301019136831161015757602401905b8282106113315761021061020485611837565b848091833561133f816112a5565b81520191019061131e565b34610157576060366003190112610157576020611283604435602435600435611b4a565b346101575760003660031901126101575760405180600c5491828152602080910192600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7916000905b8282106113d25761021085610204818903826104a6565b83546001600160a01b0316865294850194600193840193909101906113bb565b346101575760006020366003190112610d4857600435430180431161146a578190737109709ecfa91a80626ff3989d68f67f5b1dd12d803b15611466576024839260405194859384926301f7b4f360e41b845260048401525af18015610b435761145a575080f35b61146390610476565b80f35b5050fd5b611664565b3461015757600036600319011261015757602060ff600054166040519015158152f35b906114a5602092828151948592016104e4565b0190565b90600491630667f9d760e41b81526114ca82518093602086850191016104e4565b010190565b3d156114fa573d906114e0826104c8565b916114ee60405193846104a6565b82523d6000602084013e565b606090565b90816020910312610157575180151581036101575790565b6000805460081c60ff1615611530575460081c60ff1690565b80737109709ecfa91a80626ff3989d68f67f5b1dd12d803b61155157505090565b819250604051828161158e60208201906040820191737109709ecfa91a80626ff3989d68f67f5b1dd12d815260206519985a5b195960d21b910152565b036115a1601f19918281018552846104a6565b6115b760405191826111d56020820196876114a9565b51925af15061053d6115c76114cf565b602080825183010191016114ff565b90816020910312610157575161053d816112a5565b6040513d6000823e3d90fd5b6001600160a01b03909116815260406020820181905261053d92910190610507565b6040519061162682610455565b60208083523683820137565b9061163c826104c8565b61164960405191826104a6565b828152809261165a601f19916104c8565b0190602036910137565b634e487b7160e01b600052601160045260246000fd5b600019811461146a5760010190565b634e487b7160e01b600052603260045260246000fd5b9081518110156116b0570160200190565b611689565b906116bf8261128d565b6116cc60405191826104a6565b828152809261165a601f199161128d565b919082604091031261015757602082516116f6816112a5565b92015190565b6040519061170982610455565b60048252633ab9b2b960e11b6020830152565b6040519061172982610455565b600582526437bbb732b960d91b6020830152565b80518210156116b05760209160051b010190565b906001820180921161146a57565b801561146a576000190190565b90801561181857806000908282935b611804575061178983611632565b9290805b6117c3575050506117af916117b561053d926040519485936020850190611492565b90611492565b03601f1981018352826104a6565b600a90603092828206840180941161146a576001600160f81b03199081906117ea9061175f565b9460f81b1616841a6117fc848761169f565b53048061178d565b92611810600a9161167a565b93048061177b565b505060405161182681610455565b60018152600360fc1b602082015290565b9081516118438161128d565b9061185160405192836104a6565b808252611860601f199161128d565b0136602083013760005b835181101561189a57611895906001600160a01b03611889828761173d565b5116610b1f828561173d565b61186a565b509150565b60001981019190821161146a57565b600181901b91906001600160ff1b0381160361146a57565b60ff16600a019060ff821161146a57565b9060ff8091169116019060ff821161146a57565b8051906001918281166101575761190661190b91841c61189f565b611632565b91600080825b61191d575b5050505090565b6119298451841c61189f565b8110156119d95761193981611751565b61195761194e611948836118ae565b8761169f565b5160f81c611a53565b60041b91610ff060f084169316830361146a576119c76119b786946119b16119ac6119a661199861199261198d6119d39a6118ae565b611751565b8d61169f565b516001600160f81b03191690565b60f81c90565b611a53565b906118d7565b60f81b6001600160f81b03191690565b841a61125d828961169f565b90611911565b611916565b9190604051926080840184811067ffffffffffffffff821117610471576040526041845260208401906060368337604185015252604082015290565b60ff602f199116019060ff821161146a57565b60ff6060199116019060ff821161146a57565b60ff6040199116019060ff821161146a57565b60f881901b6001600160f81b031916600360fc1b81101580611b12575b611b0857606160f81b81101580611afa575b611ae857604160f81b8110159081611ad9575b50611ac85760405162461bcd60e51b8152602060048083019190915260248201526319985a5b60e21b6044820152606490fd5b611ad461053d916118c6565b611a40565b602360f91b1015905038611a95565b50611af561053d916118c6565b611a2d565b50603360f91b811115611a82565b5061053d90611a1a565b50603960f81b811115611a70565b9080821115611b3957810390811161146a576032101590565b90810390811161146a576032101590565b9080821115611b6157810390811161146a57111590565b90810390811161146a57111590565b60405190611b7d82610455565b600582526466616c736560d81b6020830152565b60405190611b9e82610455565b60048252637472756560e01b6020830152565b90608061053d9260408152600a6040820152690808080808081319599d60b21b60608201528160208201520190610507565b90608061053d9260408152600a6040820152690808080808149a59da1d60b21b60608201528160208201520190610507565b737109709ecfa91a80626ff3989d68f67f5b1dd12d803b611c43575b5061010061ff00196000541617600055565b6000809160405182602082018381526519985a5b195960d21b60408401526001606084015260608352611c758361048a565b611cad60246040518093611c9d60208301976370ca10bb60e01b8952518092858501906104e4565b81010360048101845201826104a6565b51925af150611cba6114cf565b5038611c3156fea2646970667358221220afac6c64ac3357a2cfec44e12e8167ff72e861919b7c5b0125b7d0cf67539b2b64736f6c63430008130033a2646970667358221220f3db2fb0b3bab3ebd2ee55100369c5ee46973302eead24445e9391c292772fe064736f6c63430008130033";

type BaseTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseTest__factory extends ContractFactory {
  constructor(...args: BaseTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<BaseTest> {
    return super.deploy(overrides || {}) as Promise<BaseTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseTest {
    return super.attach(address) as BaseTest;
  }
  override connect(signer: Signer): BaseTest__factory {
    return super.connect(signer) as BaseTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseTestInterface {
    return new utils.Interface(_abi) as BaseTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseTest {
    return new Contract(address, _abi, signerOrProvider) as BaseTest;
  }
}
