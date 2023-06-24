// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "forge-std/console.sol";
import "solidity-rlp-encode/RLPEncode.sol";
import "Solidity-RLP/RLPReader.sol";

contract TrustedOracle is Ownable {
    using RLPReader for bytes;
    using RLPReader for uint;
    using RLPReader for RLPReader.RLPItem;
    using RLPReader for RLPReader.Iterator;
    
    mapping(uint256 blockNumber => bytes32 blockHash) private _blockHashes;

    function setBlockHash(uint256 blockNumber, bytes32 blockHash) public onlyOwner {
        _blockHashes[blockNumber] = blockHash;
    }

    function getBlockHash(uint256 blockNumber) public view returns (bytes32) {
        return _blockHashes[blockNumber];
    }

    // rebuild block hash from block header elements
    function verifyBlockHash() public view {
        
        // block hash from Solidity-RLP test example: 0x4e454b49dc8a2e2a229e0ce911e9fd4d2aa647de4cf6e0df40cf71bff7283330
        
        // bytes32 parentHash = bytes32(0x487e074bba7f0749950d7e2f226307c8ac388cb0410cfe817931a5a44077e159);
        // bytes32 sha3Uncles = bytes32(0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347);
        // bytes20 miner = bytes20(0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c);
        // bytes32 stateRoot = bytes32(0x7b814195793c699d345339dd7a4225112ad91b9ba7f03787563a9e98ba692e52);
        // bytes32 transactionsRoot = bytes32(0xad6c9f611dfdd446855cb430b8392e20538db4f0349336063e710c6c483e9e43);
        // bytes32 receiptsRoot = bytes32(0xf022ddad6e90316614df496922cb73508a9abecfda2d3076a5f1129a01497869);
        // bytes memory logsBloom = hex"c29754f51412a148104c6716000a3084218a2c2eb411080f0204cc2000182520544cd8896089451840a4c3d492209909825614420c21350104e0a81810b82018838f088200f3022616869299810060089f08291289c920ea25d1006460513529851001477aa905491218501179c40b01348430400ad167600e0141344140022135a01484482520131c40141583050710042168c050220010c1c443f2291b41688340084524418d0048b1328844438630c88000940524800c4001202a1540b00498350932001812960220043b200016c02cf06433548b5100429220aa00423421e25121330b410051204098d8406a600b3610403d208c8381c51bd15a9dc30004";
        // uint difficulty = 2037888242889388;
        // uint number = 8000000;
        // uint gasLimit = 8002255;
        // uint gasUsed = 7985243;
        // uint timestamp = 1561100149;
        // bytes memory extraData = hex"5050594520737061726b706f6f6c2d6574682d636e2d687a";
        // bytes32 mixHash = bytes32(0x8a24dc2c8fb497ff40a622173d9c7804a274de3da4b335b2ba0e3c53e3fae714);
        // uint nonce = uint(0x00daa7b00156a516);


        // block hash from sepolia: 0x3f0fc945187c3d7d31a45d2bbebeded546aaa880ab58c2afa85b74682ea3ed88
        bytes32 parentHash = bytes32(0xaf71f0f29bfc18b5b0b0903f29ca3720692d8c49d1060d2a87ec4a2ab0ca9c8d);
        bytes32 sha3Uncles = bytes32(0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347);
        address miner = address(0x4FF58ed19a4A4EB0440804b89cB6a1eC12E05979);
        bytes32 stateRoot = bytes32(0x39b55d2fba32a8914b6cd08e4c38e2dac5f11dd48cde322a9656e3f7e41dc409);
        bytes32 transactionsRoot = bytes32(0xecac486ebc35ef9564ec959c1d49fd3aaef15e18245107319a46911c10a76f27);
        bytes32 receiptsRoot = bytes32(0x1c1477077cd770f230706dba2506880a84947f2228050290645c05bbde9f573b);
        bytes memory logsBloom = hex"00024014041006c0014484100000000141012481428c10004c0211000010020000020144008000085a2508480418000820414224182880020008090803384402000024000840020000800008230024000100006000a001200c0208000042000006024013060008041a8019842489288002000c8008808020001108100401e0934081006509100900a01080000104c8010909800009100004000ca05084820202260800410001014012230821040002006458814004804084a0801880820c50441640480220010280000a0d2980200000000869100000024304001500010020104410202a00402000060800008450000a804001000001848a8820000000637008";
        uint difficulty = 0x0;
        uint number = 0x383cbd;
        uint gasLimit = 0x1c9c380;
        uint gasUsed = 0x74a8f9;
        uint timestamp = 0x6488d24c;
        bytes memory extraData = hex"d883010b05846765746888676f312e32302e33856c696e7578";
        bytes32 mixHash = bytes32(0xafdd2b6539d0bfda9379d2a22fde6d6ee1b0ae721ff40453c5a30d8dd55c367d);
        uint nonce = uint(0x0000000000000000);
        
        bytes memory blockHashBytes = abi.encode(
            parentHash,
            sha3Uncles,
            miner,
            stateRoot,
            transactionsRoot,
            receiptsRoot,
            logsBloom,
            difficulty,
            number,
            gasLimit,
            gasUsed,
            timestamp,
            extraData,
            mixHash,
            nonce
        );
        
        RLPReader.RLPItem memory rlpItem = blockHashBytes.toRlpItem();
        bytes32 keccacked = keccak256(rlpItem.toRlpBytes());

        console.logBytes32(keccacked);
        //console.log("Should equal this: 0x4e454b49dc8a2e2a229e0ce911e9fd4d2aa647de4cf6e0df40cf71bff7283330");
        console.log("Should equal this: 0x3f0fc945187c3d7d31a45d2bbebeded546aaa880ab58c2afa85b74682ea3ed88");
    }

    function toRlpBytes(bytes memory item) public pure returns (bytes memory) {
        RLPReader.RLPItem memory rlpItem = item.toRlpItem();
        return rlpItem.toRlpBytes();
    }
}