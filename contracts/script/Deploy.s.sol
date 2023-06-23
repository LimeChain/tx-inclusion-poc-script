// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import { TrustedOracle } from "../src/TrustedOracle.sol";
import { ReceiptInclusionProver } from "../src/ReceiptInclusionProver.sol";

contract DeployScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("OWNER_PK");
        vm.startBroadcast(deployerPrivateKey);

        TrustedOracle oracle = new TrustedOracle();
        oracle.verifyBlockHash();

        ReceiptInclusionProver prover = new ReceiptInclusionProver(address(oracle));

        vm.stopBroadcast();
    }
}
