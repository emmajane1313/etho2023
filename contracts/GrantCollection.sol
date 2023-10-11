// SPDX-License-Identifier: UNLICENSE

pragma solidity ^0.8.16;

import "./GrantNFT.sol";
import "./GrantOpenAction.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

library MintParamsLibrary {
    enum PrintType {
        Sticker,
        Poster,
        Shirt,
        Hoodie
    }

    struct MintParams {
        uint256[] price;
        address chosenAddress;
        string uri;
        PrintType printType;
    }
}

contract GrantCollection is OwnableUpgradeable {
    using MintParamsLibrary for MintParamsLibrary.MintParams;

    GrantNFT public grantNFT;
    GrantOpenAction public grantOpenAction;
    uint256 private _collectionSupply;

    struct Collection {
        uint256[] price;
        uint256[] tokenIds;
        uint256 collectionId;
        uint256 mintedTokens;
        uint256 index;
        address creator;
        address chosenAddress;
        string uri;
        MintParamsLibrary.PrintType printType;
    }

    mapping(uint256 => Collection) private _collections;

    error onlyOpenActionAddress();

    event TokensMinted(
        uint256 indexed collectionId,
        string uri,
        uint256 amountMinted,
        uint256[] tokenIdsMinted,
        address owner
    );

    event CollectionCreated(
        uint256 indexed collectionId,
        string uri,
        uint256 amount,
        address owner
    );

    modifier onlyOpenAction() {
        if (msg.sender != address(grantOpenAction)) {
            revert onlyOpenActionAddress();
        }
        _;
    }

    constructor(address _grantNFTAddress) {
        grantNFT = GrantNFT(_grantNFTAddress);
        _collectionSupply = 0;
    }

    function createCollection(
        uint256 _amount,
        MintParamsLibrary.MintParams memory params
    ) external onlyOwner {
        address _creator = msg.sender;

        _collectionSupply++;

        _createNewCollection(params, _creator);

        emit CollectionCreated(
            _collectionSupply,
            params.uri,
            _amount,
            _creator
        );
    }

    function _createNewCollection(
        MintParamsLibrary.MintParams memory params,
        address _creatorAddress
    ) private {
        Collection memory newCollection = Collection({
            collectionId: _collectionSupply,
            price: params.price,
            index: 0,
            tokenIds: new uint256[](0),
            mintedTokens: 0,
            creator: _creatorAddress,
            uri: params.uri,
            printType: params.printType,
            chosenAddress: params.chosenAddress
        });

        _collections[_collectionSupply] = newCollection;
    }

    function _mintNFT(
        Collection memory _collection,
        uint256 _amount,
        uint256 _collectionId,
        uint256 _chosenIndex,
        address _purchaserAddress,
        address _acceptedToken
    ) private {
        MintParamsLibrary.MintParams memory paramsNFT = MintParamsLibrary
            .MintParams({
                price: _collection.price,
                uri: _collection.uri,
                printType: _collection.printType,
                chosenAddress: _acceptedToken
            });

        grantNFT.mintBatch(
            paramsNFT,
            _amount,
            _collectionId,
            _chosenIndex,
            _purchaserAddress
        );
    }

    function purchaseAndMintToken(
        uint256[] memory _collectionIds,
        uint256[] memory _amounts,
        uint256[] memory _chosenIndexes,
        address _purchaserAddress,
        address _acceptedToken
    ) external onlyOpenAction {
        uint256 initialSupply = grantNFT.getTotalSupplyCount();

        for (uint256 i = 0; i < _collectionIds.length; i++) {
            Collection storage collection = _collections[_collectionIds[i]];
            _mintNFT(
                collection,
                _amounts[i],
                _collectionIds[i],
                _chosenIndexes[i],
                _purchaserAddress,
                _acceptedToken
            );

            uint256[] memory newTokenIds = new uint256[](_amounts[i]);
            for (uint256 j = 0; j < _amounts[i]; j++) {
                uint256 tokenId = initialSupply + j + 1;
                newTokenIds[j] = tokenId;
                collection.mintedTokens++;
            }

            collection.tokenIds = _concatenate(
                collection.tokenIds,
                newTokenIds
            );
            collection.index = _chosenIndexes[i];

            emit TokensMinted(
                collection.collectionId,
                collection.uri,
                _amounts[i],
                newTokenIds,
                collection.creator
            );
        }
    }

    function _concatenate(
        uint256[] memory _originalArray,
        uint256[] memory _newArray
    ) internal pure returns (uint256[] memory) {
        uint256[] memory result = new uint256[](
            _originalArray.length + _newArray.length
        );
        uint256 i;
        for (i = 0; i < _originalArray.length; i++) {
            result[i] = _originalArray[i];
        }
        for (uint256 j = 0; j < _newArray.length; j++) {
            result[i++] = _newArray[j];
        }
        return result;
    }

    function getCollectionCreator(
        uint256 _collectionId
    ) public view returns (address) {
        return _collections[_collectionId].creator;
    }

    function getCollectionURI(
        uint256 _collectionId
    ) public view returns (string memory) {
        return _collections[_collectionId].uri;
    }

    function getCollectionPrice(
        uint256 _collectionId
    ) public view returns (uint256[] memory) {
        return _collections[_collectionId].price;
    }

    function getCollectionPrintType(
        uint256 _collectionId
    ) public view returns (MintParamsLibrary.PrintType) {
        return _collections[_collectionId].printType;
    }

    function getCollectionIndex(
        uint256 _collectionId
    ) public view returns (uint256) {
        return _collections[_collectionId].index;
    }

    function getCollectionTokenIds(
        uint256 _collectionId
    ) public view returns (uint256[] memory) {
        return _collections[_collectionId].tokenIds;
    }

    function getCollectionTokensMinted(
        uint256 _collectionId
    ) public view returns (uint256) {
        return _collections[_collectionId].mintedTokens;
    }

    function getCollectionSupply() public view returns (uint256) {
        return _collectionSupply;
    }
}
