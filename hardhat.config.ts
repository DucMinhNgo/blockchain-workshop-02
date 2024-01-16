import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    zerachaintest: {
      url: 'https://rpc.ankr.com/zetachain_evm_athens_testnet',
      accounts: [process.env.PRIV_KEY ?? '']
    },
    bsctest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: [process.env.PRIV_KEY ?? '']
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};

export default config;
