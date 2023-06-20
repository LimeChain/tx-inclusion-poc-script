// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

library DataTypes {
    struct BlockData {
        uint256 blockNumber;
        bytes32 blockHash;
    }

    // struct ReceiptData {
    //     bytes32 txHash,
    //     txIndex, ?
    //     receipt,
    //     receiptProofBranch
    // }
}
