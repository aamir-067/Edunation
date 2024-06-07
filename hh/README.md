# Sample Hardhat Project

This hardhat project contains the smart contract, test cases of smart contract and deployment scripts.

# Getting Stated With Project

     Note: I am using bun as a javaScript runtime and the instructions given are for bun. please follow the following commands if you are using node

1.  goto `package.json `
2.  change the scripts as given.

```json
    "scripts" : {
		"test": "npx hardhat test",
        "compile": "bunx hardhat compile",
		"deploy": "npx hardhat run scripts/edunation.js --network sepolia"
	}
```

## 1. Compiling a smart contract.

To compile a smart contract run the following command.

```bash
bun run compile
```

for npm

```bash
npm run compile
```

`Note:` if you did changes in the contract then after compiling copy Edunation.json file generated in `./artifacts/contracts/Edunation.sol` and copy it to the `../src/artifacts` directory.

## 2. Testing a smart contract.

For testing a smart contract run the following command.

```bash
bun run test
```

for npm

```bash
npm run test
```

## 1. Deploying a smart contract.

To deploy the smart contract use the following instructions.

-   add account private key and rpc node url in `hardhat.config.js`

-   then run the given command

```bash
bun run deploy
```

for npm

```bash
npm run deploy
```

### `Note:`

-   The contract will automatically deploy to sepolia testnet. to change the default behavior edit the package.json file

-   after deploying the contract change the wallet address printed in console in `../src/CONSTANTS.js`
