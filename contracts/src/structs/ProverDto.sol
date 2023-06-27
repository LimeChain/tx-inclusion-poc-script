// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Receipt.sol";
import "./BlockData.sol";

struct ProverDto {
    BlockData blockInfo;
    Receipt txReceipt;
    uint256 blockNumber;
    bytes32[] receiptProofBranch;
}
