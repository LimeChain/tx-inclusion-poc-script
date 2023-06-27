// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "openzeppelin-contracts/contracts/utils/cryptography/MerkleProof.sol";
import "forge-std/console.sol";
import "Solidity-RLP/RLPReader.sol";

import "./structs/ProverDto.sol";
import "./interfaces/ITrustedOracle.sol";
import "./interfaces/IReceiptInclusionProver.sol";

contract ReceiptInclusionProver is IReceiptInclusionProver {
    using RLPReader for bytes;
    using RLPReader for uint;
    using RLPReader for RLPReader.RLPItem;
    using RLPReader for RLPReader.Iterator;

    ITrustedOracle private _oracle;

    constructor(address oracleAddress) {
        // substitute with interfaces at some point
        _oracle = ITrustedOracle(oracleAddress);
    }

    function proveReceiptInclusion(ProverDto memory data) external view returns (bool) {
        if(!data.txReceipt.status) return false;

        if (_oracle.getBlockHash(data.blockNumber) != _getBlockHash(data.blockInfo)) return false;
        
        bytes32 txReceiptHash = _getReceiptHash(data.txReceipt);
        if (MerkleProof.verify(data.receiptProofBranch, data.blockInfo.receiptsRoot, txReceiptHash)) return false;

        return true;
    }

    function _getBlockHash(BlockData memory data) internal pure returns (bytes32) {
        bytes memory blockHashBytes = abi.encode(
            data.parentHash,
            data.sha3Uncles,
            data.miner,
            data.stateRoot,
            data.transactionsRoot,
            data.receiptsRoot,
            data.logsBloom,
            data.difficulty,
            data.number,
            data.gasLimit,
            data.gasUsed,
            data.timestamp,
            data.extraData,
            data.mixHash,
            data.nonce
        );

        RLPReader.RLPItem memory rlpItem = blockHashBytes.toRlpItem();
        return keccak256(rlpItem.toRlpBytes());
    }

    function _getReceiptHash(Receipt memory data) internal pure returns (bytes32) {
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
