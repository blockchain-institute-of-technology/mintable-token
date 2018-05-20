var BIToken = artifacts.require("./BIToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BIToken);
};
