/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { SharedNFTLogic, SharedNFTLogicInterface } from '../SharedNFTLogic'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'unencoded',
        type: 'bytes',
      },
    ],
    name: 'base64Encode',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'imageUrl',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'animationUrl',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'tokenOfEdition',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'editionSize',
        type: 'uint256',
      },
    ],
    name: 'createMetadataEdition',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'mediaData',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'tokenOfEdition',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'editionSize',
        type: 'uint256',
      },
    ],
    name: 'createMetadataJSON',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'json',
        type: 'bytes',
      },
    ],
    name: 'encodeMetadataJSON',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'numberToString',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'imageUrl',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'animationUrl',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'tokenOfEdition',
        type: 'uint256',
      },
    ],
    name: 'tokenMediaData',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610f5d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063d5fb1b1911610050578063d5fb1b19146100c6578063df30dba0146100d9578063eb111ab6146100ec57600080fd5b8063170dc6601461007757806358464f30146100a0578063d01fde8c146100b3575b600080fd5b61008a610085366004610547565b6100ff565b60405161009791906105da565b60405180910390f35b61008a6100ae3660046106d0565b610110565b61008a6100c136600461076a565b61018c565b61008a6100d436600461076a565b6101bd565b61008a6100e73660046107b3565b6101c8565b61008a6100fa366004610872565b610200565b606061010a826102b9565b92915050565b606080821561014457610122836100ff565b60405160200161013291906108fb565b60405160208183030381529060405290505b8661014e856100ff565b82888861015a896100ff565b8c6040516020016101719796959493929190610940565b60405160208183030381529060405291505095945050505050565b6060610197826101bd565b6040516020016101a79190610aea565b6040516020818303038152906040529050919050565b606061010a826103f3565b606060006101d7868686610200565b905060006101e88989848888610110565b90506101f38161018c565b9998505050505050505050565b825182516060911580159115159082906102175750805b1561025b5785610226856100ff565b86610230876100ff565b6040516020016102439493929190610b2f565b604051602081830303815290604052925050506102b2565b811561027c578561026b856100ff565b604051602001610243929190610c37565b801561029d578461028c856100ff565b604051602001610243929190610ce2565b60405180602001604052806000815250925050505b9392505050565b6060816102f957505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610323578061030d81610dbc565b915061031c9050600a83610e24565b91506102fd565b60008167ffffffffffffffff81111561033e5761033e6105ed565b6040519080825280601f01601f191660200182016040528015610368576020820181803683370190505b5090505b84156103eb5761037d600183610e38565b915061038a600a86610e4f565b610395906030610e63565b60f81b8183815181106103aa576103aa610e7b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506103e4600a86610e24565b945061036c565b949350505050565b606081516000141561041357505060408051602081019091526000815290565b6000604051806060016040528060408152602001610ee860409139905060006003845160026104429190610e63565b61044c9190610e24565b610457906004610eaa565b67ffffffffffffffff81111561046f5761046f6105ed565b6040519080825280601f01601f191660200182016040528015610499576020820181803683370190505b509050600182016020820185865187015b80821015610505576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453506001830192506104aa565b505060038651066001811461052157600281146105345761053c565b603d6001830353603d600283035361053c565b603d60018303535b509195945050505050565b60006020828403121561055957600080fd5b5035919050565b60005b8381101561057b578181015183820152602001610563565b8381111561058a576000848401525b50505050565b600081518084526105a8816020860160208601610560565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006102b26020830184610590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610637576106376105ed565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561067d5761067d6105ed565b8160405280935085815286868601111561069657600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126106c157600080fd5b6102b28383356020850161061c565b600080600080600060a086880312156106e857600080fd5b853567ffffffffffffffff8082111561070057600080fd5b61070c89838a016106b0565b9650602088013591508082111561072257600080fd5b61072e89838a016106b0565b9550604088013591508082111561074457600080fd5b50610751888289016106b0565b9598949750949560608101359550608001359392505050565b60006020828403121561077c57600080fd5b813567ffffffffffffffff81111561079357600080fd5b8201601f810184136107a457600080fd5b6103eb8482356020840161061c565b60008060008060008060c087890312156107cc57600080fd5b863567ffffffffffffffff808211156107e457600080fd5b6107f08a838b016106b0565b9750602089013591508082111561080657600080fd5b6108128a838b016106b0565b9650604089013591508082111561082857600080fd5b6108348a838b016106b0565b9550606089013591508082111561084a57600080fd5b5061085789828a016106b0565b9350506080870135915060a087013590509295509295509295565b60008060006060848603121561088757600080fd5b833567ffffffffffffffff8082111561089f57600080fd5b6108ab878388016106b0565b945060208601359150808211156108c157600080fd5b506108ce868287016106b0565b925050604084013590509250925092565b600081516108f1818560208601610560565b9290920192915050565b7f2f00000000000000000000000000000000000000000000000000000000000000815260008251610933816001850160208701610560565b9190910160010192915050565b7f7b226e616d65223a20220000000000000000000000000000000000000000000081526000885161097881600a850160208d01610560565b7f2000000000000000000000000000000000000000000000000000000000000000600a9184019182015288516109b581600b840160208d01610560565b88519101906109cb81600b840160208c01610560565b8082019150507f222c20220000000000000000000000000000000000000000000000000000000080600b8301527f6465736372697074696f6e223a20220000000000000000000000000000000000600f8301528751610a3181601e850160208c01610560565b601e920191820152610adc610ab3610aad610a84610a7e610a55602287018c6108df565b7f70726f70657274696573223a207b226e756d626572223a200000000000000000815260180190565b896108df565b7f2c20226e616d65223a20220000000000000000000000000000000000000000008152600b0190565b866108df565b7f227d7d0000000000000000000000000000000000000000000000000000000000815260030190565b9a9950505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251610b2281601d850160208701610560565b91909101601d0192915050565b7f696d616765223a20220000000000000000000000000000000000000000000000815260008551610b67816009850160208a01610560565b80830190507f3f69643d000000000000000000000000000000000000000000000000000000008060098301528651610ba681600d850160208b01610560565b7f222c2022616e696d6174696f6e5f75726c223a20220000000000000000000000600d93909101928301528551610be4816022850160208a01610560565b60229201918201528351610bff816026840160208801610560565b7f222c20220000000000000000000000000000000000000000000000000000000060269290910191820152602a019695505050505050565b7f696d616765223a20220000000000000000000000000000000000000000000000815260008351610c6f816009850160208801610560565b7f3f69643d000000000000000000000000000000000000000000000000000000006009918401918201528351610cac81600d840160208801610560565b7f222c202200000000000000000000000000000000000000000000000000000000600d9290910191820152601101949350505050565b7f616e696d6174696f6e5f75726c223a2022000000000000000000000000000000815260008351610d1a816011850160208801610560565b7f3f69643d000000000000000000000000000000000000000000000000000000006011918401918201528351610d57816015840160208801610560565b7f222c20220000000000000000000000000000000000000000000000000000000060159290910191820152601901949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610dee57610dee610d8d565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082610e3357610e33610df5565b500490565b600082821015610e4a57610e4a610d8d565b500390565b600082610e5e57610e5e610df5565b500690565b60008219821115610e7657610e76610d8d565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ee257610ee2610d8d565b50029056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220708994fd9166a9e0f11a5613cff6c7ba2c3b612fea17bbd3924d0e1013e674d464736f6c634300080a0033'

type SharedNFTLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: SharedNFTLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class SharedNFTLogic__factory extends ContractFactory {
  constructor(...args: SharedNFTLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SharedNFTLogic> {
    return super.deploy(overrides || {}) as Promise<SharedNFTLogic>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): SharedNFTLogic {
    return super.attach(address) as SharedNFTLogic
  }
  override connect(signer: Signer): SharedNFTLogic__factory {
    return super.connect(signer) as SharedNFTLogic__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): SharedNFTLogicInterface {
    return new utils.Interface(_abi) as SharedNFTLogicInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SharedNFTLogic {
    return new Contract(address, _abi, signerOrProvider) as SharedNFTLogic
  }
}
