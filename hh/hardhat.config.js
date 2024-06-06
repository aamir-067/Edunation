require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
const rpcUrl = "https://eth-sepolia.g.alchemy.com/v2/Wy3FsIl1RBSQqgXDNz-eq-XDzOaY5jr1";
// const PRIVATE_KEY = "your account private key";
const PRIVATE_KEY = "b3e5b1136f7e6ad214a07566d8d8a4d4853ae7dd9e10c696b177b637f53a88fb";
module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: rpcUrl,
      accounts: [PRIVATE_KEY]
    }
  }
};