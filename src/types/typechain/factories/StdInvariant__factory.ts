/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StdInvariant, StdInvariantInterface } from "../StdInvariant";

const _abi = [
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
  "0x6080806040523461001657610afd908161001c8239f35b600080fdfe6080806040526004908136101561001557600080fd5b600091823560e01c9182631ed7831c1461084c575081633e5e3c23146107cd5781633f7286f41461074e57816366d9a9a0146105d157816385226c811461049b578163916a17c614610240578163b5508aa91461010b575063e20c9f711461007c57600080fd5b3461010857806003193601126101085760405181548082528280526020808301937f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56392915b8282106100e8576100e4856100d881890382610a8d565b604051918291826108cc565b0390f35b83546001600160a01b0316865294850194600193840193909101906100c1565b80fd5b8234610108578060031936011261010857815461012781610aaf565b916101356040519384610a8d565b8183528381528060207f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b8186015b85841061017857604051806100e489826109c8565b604051859183549160019280841c908481168015610236575b8883108114610222578284528894939291811561020657506001146101ce575b506101c0816001960382610a8d565b815201920193019290610163565b868a52838a20955089905b8082106101ef57508101830194506101c06101b1565b8654838301860152958501958894909101906101d9565b60ff19168584015250151560051b8101830194506101c06101b1565b50634e487b7160e01b8a5260228d5260248afd5b91607f1691610191565b823461010857806003193601126101085760075461025d81610aaf565b9061026b6040519283610a8d565b80825260078352827fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688602084015b8383106102ae57604051806100e48782610910565b6040516102ba81610a5b565b82546001600160a01b031681526040516001840180548083529089526020808a20908301918a915b81600784011061042d5784600197946002979460209794610345945491818110610411575b8181106103f5575b8181106103d9575b8181106103bd575b8181106103a1575b818110610385575b81811061036b575b10610357575b500382610a8d565b83820152815201920192019190610299565b6001600160e01b031916815286018e61033d565b828a1b6001600160e01b0319168452928901928b01610337565b604083901b6001600160e01b0319168452928901928b0161032f565b606083901b6001600160e01b0319168452928901928b01610327565b608083901b6001600160e01b0319168452928901928b0161031f565b60a083901b6001600160e01b0319168452928901928b01610317565b60c083901b6001600160e01b0319168452928901928b0161030f565b60e083901b6001600160e01b0319168452928901928b01610307565b926001610100600892865463ffffffff60e01b90818160e01b16835260c08282821b16602085015260a08383821b1660408601526080848460608282851b16818a01521b1690860152838360401b1690850152828260201b16908401521660e08201520194019201916102e2565b823461010857806003193601126101085760058054906104ba82610aaf565b926104c86040519485610a8d565b82845281815260207f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0828287015b86851061050b57604051806100e48a826109c8565b604051829184549160019280841c9084811680156105c7575b89831081146105b457828452899493929181156105995750600114610561575b50610553816001960382610a8d565b8152019301940193916104f6565b878752838720955086905b8082106105825750810183019450610553610544565b86548383018601529585019589949091019061056c565b60ff1916858401525015158a1b810183019450610553610544565b634e487b7160e01b885260228f52602488fd5b91607f1691610524565b82346101085780600319360112610108576006546105ee81610aaf565b906105fc6040519283610a8d565b80825260068352827ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f602084015b83831061063f57604051806100e48782610910565b60405161064b81610a5b565b82546001600160a01b031681526040516001840180548083529089526020808a20908301918a915b8160078401106106e057846001979460029794602097946106ce945491818110610411578181106103f5578181106103d9578181106103bd578181106103a1578181106103855781811061036b571061035757500382610a8d565b8382015281520192019201919061062a565b926001610100600892865463ffffffff60e01b90818160e01b16835260c08282821b16602085015260a08383821b1660408601526080848460608282851b16818a01521b1690860152838360401b1690850152828260201b16908401521660e0820152019401920191610673565b8234610108578060031936011261010857604051600280548083529083526020808301937f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace92915b8282106107ad576100e4856100d881890382610a8d565b83546001600160a01b031686529485019460019384019390910190610796565b8234610108578060031936011261010857604051600380548083529083526020808301937fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b92915b82821061082c576100e4856100d881890382610a8d565b83546001600160a01b031686529485019460019384019390910190610815565b8390346108c857816003193601126108c857600180548083528184526020808401947fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69392915b8282106108aa576100e4866100d8818a0382610a8d565b84546001600160a01b03168752958601959383019390830190610893565b5080fd5b6020908160408183019282815285518094520193019160005b8281106108f3575050505090565b83516001600160a01b0316855293810193928101926001016108e5565b602080820190808352835180925260409283810182858560051b840101960194600080935b86851061094757505050505050505090565b909192939480969798603f198382030186528951826060818885019360018060a01b038151168652015193888382015284518094520192019085905b8082106109a45750505090806001929a019501950193969594929190610935565b82516001600160e01b03191684528a94938401939092019160019190910190610983565b6020808201818352835180915260408301918060408360051b860101950193600080915b8483106109fd575050505050505090565b90919293949596603f19828203018752848851805190818452855b828110610a475750508083018201859052601f01601f19169091018101978101960194939260010191906109ec565b818101840151858201850152889301610a18565b6040810190811067ffffffffffffffff821117610a7757604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610a7757604052565b67ffffffffffffffff8111610a775760051b6020019056fea264697066735822122009d9a758bc399a0b0c8cc09a2d54384bde538af739e70f6305c64b87b2b4b9e364736f6c63430008130033";

type StdInvariantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdInvariantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdInvariant__factory extends ContractFactory {
  constructor(...args: StdInvariantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<StdInvariant> {
    return super.deploy(overrides || {}) as Promise<StdInvariant>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdInvariant {
    return super.attach(address) as StdInvariant;
  }
  override connect(signer: Signer): StdInvariant__factory {
    return super.connect(signer) as StdInvariant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdInvariantInterface {
    return new utils.Interface(_abi) as StdInvariantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdInvariant {
    return new Contract(address, _abi, signerOrProvider) as StdInvariant;
  }
}
