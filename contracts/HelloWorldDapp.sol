pragma solidity ^0.4.8;

contract HelloWorldDapp {

    uint256 public balance = 0;

    function increase(uint amount) public {
        balance += amount;
    }

    function decrease(uint amount) public {
        balance -= amount;
    }
}