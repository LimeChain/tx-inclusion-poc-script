// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { ReceiptInclusionProver } from "./ReceiptInclusionProver.sol";
import { DataTypes } from "./DataTypes.sol";

contract DummyRefunder {

    function claim (DataTypes.BlockData calldata _blockData) view external {
        
    }
}