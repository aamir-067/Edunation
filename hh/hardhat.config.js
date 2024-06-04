const { rpcUrl, PRIVATE_KEY } = require("../src/CONSTANTS");

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: rpcUrl,
      accounts: [PRIVATE_KEY]
    }
  }
};