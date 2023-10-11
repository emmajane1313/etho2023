// SPDX-License-Identifier: UNLICENSE

pragma solidity ^0.8.16;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./GrantCollection.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";

contract GrantNFT is ERC721Enumerable, OwnableUpgradeable {
    using MintParamsLibrary for MintParamsLibrary.MintParams;

    GrantCollection public grantCollection;
    uint256 private _totalSupplyCount;

    struct Token {
        uint256 tokenId;
        uint256 collectionId;
        uint256 index;
        uint256[] price;
        string uri;
    }

    mapping(uint256 => Token) private _tokens;

    error OnlyGrantCollectionContract();

    event BatchTokenMinted(address indexed to, uint256[] tokenIds, string uri);

    modifier onlyCollectionContract() {
        if (msg.sender != address(grantCollection)) {
            revert OnlyGrantCollectionContract();
        }
        _;
    }

    constructor() ERC721("PreRollNFT", "PRNFT") {
        _totalSupplyCount = 0;
    }

    function mintBatch(
        MintParamsLibrary.MintParams memory params,
        uint256 _amount,
        uint256 _collectionId,
        uint256 _chosenIndex,
        address _purchaserAddress
    ) public onlyCollectionContract {
        uint256[] memory tokenIds = new uint256[](_amount);
        for (uint256 i = 0; i < _amount; i++) {
            _totalSupplyCount += 1;
            _mintToken(params, _collectionId, _chosenIndex);

            tokenIds[i] = _totalSupplyCount;
            _safeMint(_purchaserAddress, _totalSupplyCount);
        }

        emit BatchTokenMinted(_purchaserAddress, tokenIds, params.uri);
    }

    function _mintToken(
        MintParamsLibrary.MintParams memory params,
        uint256 _collectionId,
        uint256 _chosenIndex
    ) private {
        Token memory newToken = Token({
            tokenId: _totalSupplyCount,
            collectionId: _collectionId,
            price: params.price,
            uri: params.uri,
            index: _chosenIndex
        });

        _tokens[_totalSupplyCount] = newToken;
    }

    function burnBatch(uint256[] memory _tokenIds) public {
        for (uint256 i = 0; i < _tokenIds.length; i++) {
            require(
                msg.sender == ownerOf(_tokenIds[i]),
                "ERC721Metadata: Only token owner can burn tokens"
            );
        }

        for (uint256 i = 0; i < _tokenIds.length; i++) {
            burn(_tokenIds[i]);
        }
    }

    function burn(uint256 _tokenId) public {
        require(
            msg.sender == ownerOf(_tokenId),
            "ERC721Metadata: Only token owner can burn token"
        );
        _burn(_tokenId);
    }

    function tokenURI(
        uint256 _tokenId
    ) public view virtual override returns (string memory) {
        return _tokens[_tokenId].uri;
    }

    function getTotalSupplyCount() public view returns (uint256) {
        return _totalSupplyCount;
    }

    function getTokenPrice(
        uint256 _tokenId
    ) public view returns (uint256[] memory) {
        return _tokens[_tokenId].price;
    }

    function getTokenCollection(
        uint256 _tokenId
    ) public view returns (uint256) {
        return _tokens[_tokenId].collectionId;
    }

    function getTokenId(uint256 _tokenId) public view returns (uint256) {
        return _tokens[_tokenId].tokenId;
    }

    function getTokenIndex(uint256 _tokenId) public view returns (uint256) {
        return _tokens[_tokenId].index;
    }

    function _msgData()
        internal
        view
        virtual
        override(Context, ContextUpgradeable)
        returns (bytes calldata)
    {
        return msg.data;
    }

    function _msgSender()
        internal
        view
        virtual
        override(Context, ContextUpgradeable)
        returns (address)
    {
        return msg.sender;
    }
}
