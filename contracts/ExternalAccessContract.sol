// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

interface IVariables6 {
    function name4() external view returns (string memory);
}

contract ExternalAccessContract {
    IVariables6 public variables6;

    constructor(address _variables6Address) {
        variables6 = IVariables6(_variables6Address);
    }

    //function tryAccessName1() public view returns (string memory) {
        // This should fail
    //    return variables6.name1();
    //}

    //function tryAccessName2() public view returns (string memory) {
        // This should fail
    //    return variables6.name2();
    //}

    //function tryAccessName3() public view returns (string memory) {
        // This should fail
    //    return variables6.name3();
    //}

    function tryAccessName4() public view returns (string memory) {
        // This should succeed
        return variables6.name4();
    }
}