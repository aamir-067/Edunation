require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
const rpcUrl = "your costume ethereum rpc node url";
const PRIVATE_KEY = "your private key";
module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: rpcUrl,
      accounts: [PRIVATE_KEY]
    }
  }
};