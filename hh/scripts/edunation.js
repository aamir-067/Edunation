const { ethers } = require("hardhat");

async function main() {
    const ownerAddress = "0xb95707D23Ba18d812a63275e16Ca0e2F05250533"
    const contract1 = await ethers.getContractFactory("Edunation");
    const edunation = await contract1.deploy(ownerAddress);
    console.log("edunation address : ", edunation.target);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});