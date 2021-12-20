
var Vote = artifacts.require("./PineapplePizzaVote.sol");

module.exports = function(deployer) {
  deployer.deploy(Vote);
};