// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

struct BlockData {
    bytes32 parentHash;
    bytes32 sha3Uncles;
    address miner;
    bytes32 stateRoot;
    bytes32 transactionsRoot;
    bytes32 receiptsRoot;
    bytes logsBloom;
    uint difficulty;
    uint number;
    uint gasLimit;
    uint gasUsed;
    uint timestamp;
    bytes extraData;
    bytes32 mixHash;
    uint nonce;
}
