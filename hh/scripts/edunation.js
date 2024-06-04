const { ethers } = require("hardhat");

async function main() {
    const ownerAddress = "0x575cA73E642983fF8818F0cb0Fa692A788Bc45A4"
    const contract1 = await ethers.getContractFactory("Edunation");
    const edunation = await contract1.deploy(ownerAddress);
    console.log("edunation address : ", edunation.target);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});