# Megatech Token
he official repo for the Megatech (MGT) Token, with description of: all of the unit tests used and the contracts deployed to the Binance Smart Chain for the MGT token.
# Project Status
The token contract has been deployed to the Binance Smart Chain (BSC).

# Getting Started
Recommended Node version is 16.0.0 and above.

```bash
$ npx yarn
$ npx hardhat node
$ npx hardhat test
```

# Project Structure
This a hardhat javascript project.

## Tests

Tests are found in the `./test/` folder. `./sample-test.js` contains various test helpers.

## Contracts

Solidity smart contracts are found in `./contracts/`.
`./contracts` folder contains contracts 

## Deploy
Deploy script can be found in the `scripts/sample-scripts.js` folder.

To add the private key of a deployer account, assign the following variable in``hardhat-config.js`
```
account : ["PRIVATE KEY "]
```

# Deploy Contract

```bash
$ npx hardhat run scripts/sample-script.js --network bsc
```
