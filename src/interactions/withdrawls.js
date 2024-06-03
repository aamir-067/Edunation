import { getAvailableBalance, getOwner, getTopDonation } from "./helpers";


export const withdrawEth = async ({ amount, massage, contract, signer }) => {
    try {
        if (massage.trim().length <= 0) {
            console.error("You have to provide a massage which show that for what purpose you want to withdraw");
            return new Error("You have to provide a massage which show that for what purpose you want to withdraw");

        }

        // make sure that the caller is owner.
        const owner = await getOwner();
        if (signer.address !== owner) {
            console.error("only owner can withdraw ethers");
            return new Error("only owner can withdraw ethers");
        }

        // make sure the amount is less then the available balance.
        const availableBalanceInWei = await getAvailableBalance({ contract });

        if (+ethers.formatEther(availableBalanceInWei) < amount) {
            console.error("not enough ethers are available to withdraw");
            return new Error("not enough ethers are available to withdraw");
        }


        await contract.withdraw(amount, massage);

        // success
        return true;

    } catch (error) {
        console.error('error while donating ethers', error);
        return false;
    }
}
