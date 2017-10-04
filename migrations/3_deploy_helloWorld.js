var HelloWorld = artifacts.require("./HelloWorldDapp.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
