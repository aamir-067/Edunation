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
            await edunation.donate("john doe", "not available", "this is testing donation", { value: ethers.parseEther("0.05") });

            const transactions = await edunation.recentTransactions();
            const myTransaction = transactions[0];


            // this means that this is a donation not a withdrawal.
            expect(myTransaction[0]).to.equal(0n);
            expect(myTransaction[1]).to.equal("this is testing donation");
            expect(myTransaction[2]).to.equal(ethers.parseEther("0.05"));
            expect(myTransaction[3]).to.equal(owner.address);  // since the donator is owner.

        })

        it('increase the trxCount variable', async () => {
            const trxCount = await edunation.trxCount();
            await edunation.donate("aamir", "not available", "this is testing donation", { value: ethers.parseEther("0.05") });

            const trxCount02 = await edunation.trxCount();

            expect(trxCount).to.equal(0)
            expect(trxCount02).to.equal(1);
        })

        it("not increment the trxCount if its already equals to 10", async () => {

            // first perform  a 10 donations and then see if the trxCount is increasing or not.
            for (let i = 0; i <= 10; i++) {
                await edunation.donate(`donation no ${i}`, "not available", "this is testing donation", { value: ethers.parseEther("0.02") });
            }

            const trxCount = await edunation.trxCount();

            // donate again and check if the trxCount increases or not.
            await edunation.donate("jane doe", "not available", "this is testing donation", { value: ethers.parseEther("0.05") });
            const trxCount02 = await edunation.trxCount();

            expect(trxCount).to.equal(10)
            expect(trxCount02).to.equal(10);
        });


        it("not accept donation if amount is less then 0.01 ether", async () => {
            await expect(edunation.donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.004") })).to.be.revertedWith("minimum amount to donate is 0.01 eth");
        });


        it("set the donation as top donation if its value is greater all donations", async () => {
            await edunation.donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.04") });

            const topDonation = await edunation.topDonor();

            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });

            const topDonation02 = await edunation.topDonor();

            expect(topDonation[1]).to.equal(owner.address);
            expect(topDonation02[1]).to.equal(account02.address);
        });

        it("emit new transaction event", async () => {
            await expect(edunation.donate("marry doe", "", "this is testing donation", { value: ethers.parseEther("0.1") }))
                .to.emit(edunation, "newTransection")
                .withArgs(owner.address, 0, ethers.parseEther("0.1"));
        });


    })

    describe('withdrawals', () => {

        it('only owner can access the withdraw function', async () => {
            await expect(edunation.connect(account02).withdraw(ethers.parseEther("0.002"), "amount need for students books")).to.be.revertedWith("only owner can withdraw ethers");
        })


        it('revert if the withdrawable amount exceeds total available amount', async () => {

            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });

            // withdraw the amount.
            await expect(edunation.withdraw(ethers.parseEther("0.3"), "amount need for students books")).to.be.revertedWith("not enough balance to withdraw");
        })

        it("should deposit the amount in the owner address", async () => {

            const beforeBalance = await ethers.provider.getBalance(owner.address);
            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });
            await edunation.withdraw(ethers.parseEther("0.2"), "amount need for students books");

            const afterBalance = await ethers.provider.getBalance(owner.address);

            expect(beforeBalance + ethers.parseEther("0.2")).to.greaterThanOrEqual(afterBalance); // maybe greater because the fee is also deducted for the owner account
        });

        it('record the transaction', async () => {

            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });
            await edunation.withdraw(ethers.parseEther("0.1"), "amount need for students books");

            const transactions = await edunation.recentTransactions();
            const myTransaction = transactions[1];  // because the first one will be a donate transaction



            expect(myTransaction[0]).to.equal(1)    // this means that this is a donation is a withdrawal.
            expect(myTransaction[1]).to.equal("amount need for students books");
            expect(myTransaction[2]).to.equal(ethers.parseEther("0.1"));
            expect(myTransaction[3]).to.equal(owner.address);  // since the donator is owner.
        })

        it('emit new transaction event', async () => {

            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });

            await expect(await edunation.withdraw(ethers.parseEther("0.05"), "amount need for students books"))
                .to.emit(edunation, "newTransection")
                .withArgs(owner.address, 1, ethers.parseEther("0.05"));
        })
    });
    describe('currentBalance', () => {
        it("initially should return zero balance", async () => {

            expect(await edunation.availableBalance()).to.equal(0n);
        });

        it("increases with donations", async () => {

            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });

            expect(await edunation.availableBalance()).to.equal(ethers.parseEther("0.2"));
        });

        it("decrease with withdraws", async () => {

            await edunation.connect(account02).donate("marry doe", "not available", "this is testing donation", { value: ethers.parseEther("0.2") });
            await edunation.withdraw(ethers.parseEther("0.1"), "amount need for students books");

            expect(await edunation.availableBalance()).to.equal(ethers.parseEther("0.1"));

        });
    })
});