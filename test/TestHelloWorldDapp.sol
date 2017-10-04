pragma solidity ^0.4.13;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HelloWorldDapp.sol";

contract TestHelloWorld {

  function testIncreasing() {

    HelloWorld hello = new HelloWorld();

    Assert.equal(hello.balance(), 0, "Initial balance should be 0");

    hello.increase();

    Assert.equal(hello.balance(), 1, "After increasing balance should be 1");

  }

  function testIncreasingAndDecreasing() {

    HelloWorld hello = new HelloWorld();

    Assert.equal(hello.balance(), 0, "Initial balance should be 0");

    hello.increase();

    Assert.equal(hello.balance(), 1, "After increasing balance should be 1");

    hello.decrease();

    Assert.equal(hello.balance(), 0, "After decreasing balance should be 0 again");

  }

}
