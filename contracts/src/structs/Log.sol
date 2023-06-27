// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

struct Log {
    address logAddress;
    bytes32[] topics;
    bytes data;
}