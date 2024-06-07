# DApp README

## Introduction

This repository contains the source code for a Decentralized Application (DApp) developed to facilitate donations for child education charities using Ethereum. The DApp allows users to donate Ether (ETH) to the charity and provides transparency regarding transactions and donation amounts.

## Requirements

To run and develop the DApp locally, you need to have the following software installed on your machine:

-   Node.js
-   Browser with Ethereum wallet (e.g. MetaMask)

## Installation

To install the dependencies and set up the project locally, follow these steps:

### Project Dependencies

1. Clone this repository:
    ```bash
    git clone https://github.com/aamir-067/Edunation.git
    cd Edunation
    ```
2. Install project dependencies:

    - install react.js dependencies

    ```bash
    npm install
    ```

    - install hardhat dependencies. (install only if you want to change, re-deploy or test the contract).

    ```bash
    cd hh
    npm install
    ```

## Usage

### for production use:

```bash
bun run start
```

for `npm`

```bash
npm run start
```

### For Development usage:

1. start the frontend development server:

    ```bash
    bun run dev
    ```

    for `npm`

    ```bash
    npm run dev
    ```

2. for contract modification follow instruction in `./hh/README.md`
