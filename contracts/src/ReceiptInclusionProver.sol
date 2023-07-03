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

    function proveReceiptInclusion(ProverDto memory data) external view returns (bool) {
        if (!data.txReceipt.status) return false;

        if (_oracle.getBlockHash(data.blockNumber) != _getBlockHash(data.blockData)) return false;

        bytes32 txReceiptHash = _getReceiptHash(data.txReceipt);
        if (MerkleProof.verify(data.receiptProofBranch, data.blockData.receiptsRoot, txReceiptHash)) return false;

        return true;
    }

    function _getBlockHash(BlockData memory blockData) internal view returns (bytes32) {
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

        // encode the length of the buffer
        bytes memory rlp = RLPWriter.writeList(buffer.data);
        console.logBytes(rlp);

        console.log("BLOCKHASH: ");
        console.logBytes32(keccak256(rlp));

        return keccak256(rlp);
    }

    function _getReceiptHash(Receipt memory data) internal pure returns (bytes32) {
        bytes memory receiptHashBytes = abi.encode(data.status, data.cumulativeGasUsed, data.bitvector, data.logs);

        RLPReader.RLPItem memory rlpItem = receiptHashBytes.toRlpItem();
        return keccak256(rlpItem.toRlpBytes());
    }
}
