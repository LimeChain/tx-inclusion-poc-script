// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "forge-std/console.sol";
import "solidity-rlp-encode/RLPEncode.sol";
import "Solidity-RLP/RLPReader.sol";

contract TrustedOracle is Ownable {
    mapping(uint256 blockNumber => bytes32 blockHash) private _blockHashes;

    function setBlockHash(uint256 blockNumber, bytes32 blockHash) public onlyOwner {
        _blockHashes[blockNumber] = blockHash;
    }

    function getBlockHash(uint256 blockNumber) public view returns (bytes32) {
        return _blockHashes[blockNumber];
    }

    // rebuild block hash from block header elements
    function verifyBlockHash() public view {
        
        bytes32 parentHash = bytes32(0xaf71f0f29bfc18b5b0b0903f29ca3720692d8c49d1060d2a87ec4a2ab0ca9c8d);
        bytes32 sha3Uncles = bytes32(0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347);
        bytes32 stateRoot = bytes32(0x39b55d2fba32a8914b6cd08e4c38e2dac5f11dd48cde322a9656e3f7e41dc409);
        bytes32 transactionsRoot = bytes32(0xecac486ebc35ef9564ec959c1d49fd3aaef15e18245107319a46911c10a76f27);
        bytes32 receiptsRoot = bytes32(0x1c1477077cd770f230706dba2506880a84947f2228050290645c05bbde9f573b);
        uint difficulty = uint(0x0); // may be int256
        uint number = uint(0x383cbd); // may be int256
        uint gasLimit = uint64(0x1c9c380); // uint64
        uint gasUsed = uint64(0x74a8f9); // uint64
        uint timestamp = uint64(0x6488d24c); // uint64
        uint nonce = uint(0x0000000000000000); // uint64


        // FIRST TRY
        bytes[] memory rlpArray = new bytes[](11);
        rlpArray[0] = abi.encode(parentHash);
        rlpArray[1] = abi.encode(sha3Uncles);
        rlpArray[2] = abi.encode(stateRoot);
        rlpArray[3] = abi.encode(transactionsRoot);
        rlpArray[4] = abi.encode(receiptsRoot);
        rlpArray[5] = abi.encode(difficulty);
        rlpArray[6] = abi.encode(number);
        rlpArray[7] = abi.encode(gasLimit);
        rlpArray[8] = abi.encode(gasUsed);
        rlpArray[9] = abi.encode(timestamp);
        rlpArray[10] = abi.encode(nonce);

        bytes memory rlpRaw = RLPEncode.encodeList(rlpArray);
        bytes32 blockHashBytes = keccak256(rlpRaw);

        console.logBytes32(blockHashBytes);
        console.log("Should equal this: 0x3f0fc945187c3d7d31a45d2bbebeded546aaa880ab58c2afa85b74682ea3ed88");

        // result should be equal to this blockHash 0x3f0fc945187c3d7d31a45d2bbebeded546aaa880ab58c2afa85b74682ea3ed88
    }
}