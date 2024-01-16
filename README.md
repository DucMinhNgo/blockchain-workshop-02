yarn add openzeppelin-solidity

yarn add ethers

yarn add dotenv

https://forum.openzeppelin.com/t/error-hh404-file-openzeppelin-contracts-token-erc721-extensions-erc721uristorage-sol-imported-from-contracts-chainbattles-sol-not-found/30626/8

npm install @openzeppelin/contracts

npm audit fix --force

npx hardhat test

# Deploy

npx hardhat run scripts/deploy.js --network bsctest

# Info

Deploying contracts with the account: 0x765D61b0DfA3e7F83632d0003ee58eAe91050d4d
Token address: 0x02Ba1455A47d7eD9fe7b3bAdCD0AEB2984AFe4BE

# Verify

npx hardhat verify --network bsctest 0x02Ba1455A47d7eD9fe7b3bAdCD0AEB2984AFe4BE

Successfully verified contract DustinToken02 on the block explorer.
https://testnet.bscscan.com/address/0x02Ba1455A47d7eD9fe7b3bAdCD0AEB2984AFe4BE#code

# Setup typescript

https://hardhat.org/hardhat-runner/docs/guides/typescript

mv hardhat.config.js hardhat.config.ts
