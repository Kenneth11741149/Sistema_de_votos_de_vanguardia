
var Vote = artifacts.require("./PinneapplePizzaVote.sol");

module.exports = function(deployer) {
  deployer.deploy(Vote);
};