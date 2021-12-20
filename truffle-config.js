const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    develop: {
      port: 7545
    },
    kovan: {
      networkCheckTimeout: 10000,
      provider: () => {
         return new HDWalletProvider(
           secrets.mnemonic,
           `wss://kovan.infura.io/ws/v3/${secrets.projectId}`
         );
      },
      network_id: "42",
   },
  }
};