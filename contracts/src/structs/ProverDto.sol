// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./BlockData.sol";

struct ProverDto {
    uint256 blockNumber;
    bytes32 blockHash;
    bytes32[] receiptProofBranch;
    bytes32 receiptRoot;
    uint256 txIndex;
    bytes32 txReceipt;
    BlockData blockData;
}
