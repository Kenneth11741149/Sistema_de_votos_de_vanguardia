
var Vote = artifacts.require("./Web3Vote.sol");

module.exports = function(deployer) {
  deployer.deploy(Vote);
};