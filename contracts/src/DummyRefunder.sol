// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ReceiptInclusionProver} from "./ReceiptInclusionProver.sol";
import "./structs/ProverDto.sol";

contract DummyRefunder {
    ReceiptInclusionProver private _prover;

    constructor(address proverAddress) {
        // substitute with interfaces at some point
        _prover = ReceiptInclusionProver(proverAddress);
    }

    function claim(ProverDto calldata _proverDto) external view returns (bool) {
        return true;
    }
}
