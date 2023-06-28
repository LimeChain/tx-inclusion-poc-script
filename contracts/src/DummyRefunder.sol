// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/IReceiptInclusionProver.sol";
import "./structs/ProverDto.sol";

contract DummyRefunder {
    IReceiptInclusionProver private _prover;

    constructor(address proverAddress) {
        // substitute with interfaces at some point
        _prover = IReceiptInclusionProver(proverAddress);
    }

    function claim(ProverDto calldata data) external view returns (bool) {
        return true;
    }
}
