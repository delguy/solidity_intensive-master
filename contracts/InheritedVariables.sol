// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "./Variables.sol";

contract InheritedVariables is Variables6 {
    function getInternalName() public view returns (string memory) {
        return name3;
    }
}