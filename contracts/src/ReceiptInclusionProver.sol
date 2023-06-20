// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { TrustedOracle } from "./TrustedOracle.sol";
import { DataTypes } from "./DataTypes.sol";

contract ReceiptInclusionProver {
    TrustedOracle private _oracle;

    constructor(
        address oracleAddress
    ) {
        // substitute with interfaces at some point
        _oracle = TrustedOracle(oracleAddress);
    }

    function proveReceiptInclusion(
        DataTypes.BlockData calldata _blockData
    ) external view {
        require(_oracle.getBlockHash(_blockData.blockNumber) == _blockData.blockHash, "Block hash does not match");
    }
}
