import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY || "";
const infuraKey = process.env.INFURA_API_KEY || "";
const etherscanApi = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      evmVersion: "byzantium",
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: "none",
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    bnb: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [privateKey],
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    myNetwork: {
      url: "http://127.0.0.1:1545",
      accounts: [privateKey],
      gas: 300000000,
    },
  },
  etherscan: {
    apiKey: etherscanApi,
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    // deploy: "./deploy",
    sources: "./contracts",
    // tests: "./tests",
  },
  mocha: {
    timeout: 60000,
  },
};

export default config;
