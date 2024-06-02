const { expect } = require('chai');
const { ethers } = require("hardhat");


describe('Edunation', function () {
    var edunation, owner, account02, account03;
    beforeEach(async () => {
        const contract1 = await ethers.getContractFactory("Edunation");
        [owner, account02, account03] = await ethers.getSigners();
        edunation = await contract1.deploy(owner.address);
    });



    describe('deployment', () => {
        it('should set correct owner address and trxCount', async () => {

            const ownerAddress = await edunation.owner();
            const trxCount = await edunation.trxCount();
            expect(ownerAddress).to.equal(owner.address);
            expect(trxCount).to.equal(0);
        });

        it("top donation must be empty at start", async () => {
            const topDonator = await edunation.topDonor();

            expect(topDonator[0]).to.equal("");
            expect(topDonator[1]).to.equal("0x0000000000000000000000000000000000000000");
            expect(topDonator[2]).to.equal(0n);
            expect(topDonator[3]).to.equal("");
        });
    });





    describe('donations', () => {
        it('add transaction to transaction array after successful donations', async () => {
        })

        it('increase the trxCount variable', async () => {

        })

        it("not increment the trxCount if its already equals to 10", async () => { });


        it("not accept donation if amount is less then 0.01 ether", async () => { });

        it("set the donation as top donation if its value is greater all donations", async () => { });

        it("emit new transaction event", async () => { });


    })

    describe('withdrawals', () => {
        it('only owner can access the withdraw function', async () => {

        })


        it('revert if the withdrawable amount exceeds total available amount', async () => {

        })

        it('record the transaction', async () => {

        })

        it('emit new transaction event', async () => {

        })
    });
    describe('currentBalance', () => {
        it("initially should return zero balance", async () => { });

        it("increases with donations", async () => { });

        it("decrease with withdraws", async () => { });
    })
});