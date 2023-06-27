// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/IReceiptInclusionProver.sol";
import "./structs/ProverDto.sol";

contract DummyRefunder {
    function claim(ProverDto calldata data) external view {}
}
