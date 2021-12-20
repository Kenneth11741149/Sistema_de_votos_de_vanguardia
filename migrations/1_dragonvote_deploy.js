
var Vote = artifacts.require("./DragonVote.sol");

module.exports = function(deployer) {
  deployer.deploy(Vote);
};