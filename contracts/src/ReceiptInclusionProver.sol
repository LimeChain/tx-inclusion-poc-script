// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "openzeppelin-contracts/contracts/utils/cryptography/MerkleProof.sol";
import "forge-std/console.sol";
import "Solidity-RLP/RLPReader.sol";

import "./structs/ProverDto.sol";
import "./interfaces/ITrustedOracle.sol";
import "./interfaces/IReceiptInclusionProver.sol";
import "./lib/RLPEncoder.sol";
import "./lib/DynamicBufferLib.sol";
import "./structs/BlockData.sol";

contract ReceiptInclusionProver is IReceiptInclusionProver {
    using RLPReader for bytes;
    using RLPReader for uint256;
    using RLPReader for RLPReader.RLPItem;
    using RLPReader for RLPReader.Iterator;
    using RLPEncoder for bytes;
    using DynamicBufferLib for DynamicBufferLib.DynamicBuffer;

    ITrustedOracle private _oracle;

    constructor(address oracleAddress) {
        _oracle = ITrustedOracle(oracleAddress);
    }

    function proveReceiptInclusion(
        ProverDto memory data
    ) external view returns (bool) {
        if (!data.txReceipt.status) return false;

        if (
            _oracle.getBlockHash(data.blockNumber) !=
            _getBlockHash(data.blockData)
        ) return false;

        // bytes32 txReceiptHash = _getReceiptHash(data.txReceipt);
        // if (MerkleProof.verify(data.receiptProofBranch, data.blockData.receiptsRoot, txReceiptHash)) return false;

        return true;
    }

    function _getBlockHash(
        BlockData memory blockData
    ) internal view returns (bytes32) {
        // bytes32 parentHash = bytes32(0xaf71f0f29bfc18b5b0b0903f29ca3720692d8c49d1060d2a87ec4a2ab0ca9c8d);
        // bytes32 sha3Uncles = bytes32(0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347);
        // address miner = address(0x4FF58ed19a4A4EB0440804b89cB6a1eC12E05979);
        // bytes32 stateRoot = bytes32(0x39b55d2fba32a8914b6cd08e4c38e2dac5f11dd48cde322a9656e3f7e41dc409);
        // bytes32 transactionsRoot = bytes32(0xecac486ebc35ef9564ec959c1d49fd3aaef15e18245107319a46911c10a76f27);
        // bytes32 receiptsRoot = bytes32(0x1c1477077cd770f230706dba2506880a84947f2228050290645c05bbde9f573b);
        // bytes memory logsBloom =
        //     hex"00024014041006c0014484100000000141012481428c10004c0211000010020000020144008000085a2508480418000820414224182880020008090803384402000024000840020000800008230024000100006000a001200c0208000042000006024013060008041a8019842489288002000c8008808020001108100401e0934081006509100900a01080000104c8010909800009100004000ca05084820202260800410001014012230821040002006458814004804084a0801880820c50441640480220010280000a0d2980200000000869100000024304001500010020104410202a00402000060800008450000a804001000001848a8820000000637008";
        // uint256 difficulty = 0x0;
        // uint256 number = 0x383cbd;
        // uint256 gasLimit = 0x1c9c380;
        // uint256 gasUsed = 0x74a8f9;
        // uint256 timestamp = 0x6488d24c;
        // bytes memory extraData = hex"d883010b05846765746888676f312e32302e33856c696e7578";
        // bytes32 mixHash = bytes32(0xafdd2b6539d0bfda9379d2a22fde6d6ee1b0ae721ff40453c5a30d8dd55c367d);
        // bytes memory nonce = hex"0000000000000000";
        // uint256 baseFeePerGas = 0x55c69;
        // uint256 withdrawalsRoot = 0x1684473bd7a388919b18703522ea53d4660a08fe66d96945f2d8a64396b82d9c;

        bytes32 parentHash = blockData.parentHash;
        bytes32 sha3Uncles = blockData.sha3Uncles;
        address miner = blockData.miner;
        bytes32 stateRoot = blockData.stateRoot;
        bytes32 transactionsRoot = blockData.transactionsRoot;
        bytes32 receiptsRoot = blockData.receiptsRoot;
        bytes memory logsBloom = blockData.logsBloom;
        uint256 difficulty = blockData.difficulty;
        uint256 number = blockData.number;
        uint256 gasLimit = blockData.gasLimit;
        uint256 gasUsed = blockData.gasUsed;
        uint256 timestamp = blockData.timestamp;
        bytes memory extraData = blockData.extraData;
        bytes32 mixHash = blockData.mixHash;
        bytes memory nonce = blockData.nonce;
        uint256 baseFeePerGas = blockData.baseFeePerGas;
        bytes32 withdrawalsRoot = blockData.withdrawalsRoot;

        DynamicBufferLib.DynamicBuffer memory buffer;

        // // encode and append parentHash, sha3Uncles, miner, stateRoot, transactionsRoot and receiptsRoot
        // bytes memory parentUncleminerStateTransactionsReceipts = (
        //     abi.encode(
        //         parentHash,
        //         sha3Uncles,
        //         miner,
        //         stateRoot,
        //         transactionsRoot,
        //         receiptsRoot
        //     )
        // ).encodeCallData(0);

        // buffer.append(parentUncleminerStateTransactionsReceipts);

        // // encode and append logsBloom
        // bytes memory logsBloomEncoded = logsBloom.encodeBytes();
        // buffer.append(logsBloomEncoded);

        // // encode and append difficulty, number, gasLimit, gasUsed and timestamp
        // bytes memory difficultynumberGasLimitUsedTs = (
        //     abi.encode(difficulty, number, gasLimit, gasUsed, timestamp)
        // ).encodeCallData(0);
        // buffer.append(difficultynumberGasLimitUsedTs);

        // // encode and append extraData
        // bytes memory extraDataEncoded = extraData.encodeBytes();
        // buffer.append(extraDataEncoded);

        // // encode and append mixHash
        // buffer.append((abi.encode(mixHash)).encodeCallData(0));

        // // encode and append nonce - nonce is encoded with length, as it is fixed 64-bit == [8]byte
        // bytes memory encodedNonce = nonce.encodeBytes();
        // buffer.append(encodedNonce);

        // // encode and append baseFeePerGas and withdrawalsRoot
        // buffer.append(
        //     (abi.encode(baseFeePerGas, withdrawalsRoot)).encodeCallData(0)
        // );

        // encode the length of the buffer
        bytes memory rlp = RLPWriter.writeList(buffer.data);
        console.logBytes(rlp);

        console.log("BLOCKHASH: ");
        console.logBytes32(keccak256(rlp));

        return keccak256(rlp);
    }

    function _getReceiptHash(
        Receipt memory data
    ) internal pure returns (bytes32) {
        bytes memory receiptHashBytes = abi.encode(
            data.status,
            data.cumulativeGasUsed,
            data.bitvector,
            data.logs
        );

        RLPReader.RLPItem memory rlpItem = receiptHashBytes.toRlpItem();
        return keccak256(rlpItem.toRlpBytes());
    }
}
