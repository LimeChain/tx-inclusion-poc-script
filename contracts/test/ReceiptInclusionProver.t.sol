// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/ReceiptInclusionProver.sol";

contract ReceiptInclusionProverTest is Test {
    ReceiptInclusionProver public prover;

    function setUp() public {
        prover = new ReceiptInclusionProver();
    }
}
