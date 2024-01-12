require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545" // dùng khi chạy npx hardhat node
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/<key>",
      chainId: 213456,
      // accounts: [privateKey1, privateKey2, ...],
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        count: 20,
      },
    }
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
