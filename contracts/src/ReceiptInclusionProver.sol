// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "src/structs/ProverDto.sol";
import "src/interfaces/ITrustedOracle.sol";
import "src/interfaces/IReceiptInclusionProver.sol";

contract ReceiptInclusionProver is IReceiptInclusionProver {
    ITrustedOracle private _oracle;

    constructor(address oracleAddress) {
        // substitute with interfaces at some point
        _oracle = ITrustedOracle(oracleAddress);
    }

    function proveReceiptInclusion(ProverDto calldata data) external view returns (bool) {
        if (_oracle.getBlockHash(data.blockNumber) != data.blockHash) return false;

        if (!_verify(data.receiptProofBranch, data.receiptRoot, data.txReceipt, data.txIndex)) return false;

        return true;
    }

    function _verify(bytes32[] memory proof, bytes32 root, bytes32 leaf, uint256 index) internal pure returns (bool) {
        bytes32 hash = leaf;

        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];

            if (index % 2 == 0) {
                hash = keccak256(abi.encodePacked(hash, proofElement));
            } else {
                hash = keccak256(abi.encodePacked(proofElement, hash));
            }

            index = index / 2;
        }

        return hash == root;
    }
}
