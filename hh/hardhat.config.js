require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
const rpcUrl = "https://eth-sepolia.g.alchemy.com/v2/Wy3FsIl1RBSQqgXDNz-eq-XDzOaY5jr1";
const PRIVATE_KEY = "your account private key";
module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: rpcUrl,
      accounts: [PRIVATE_KEY]
    }
  }
};