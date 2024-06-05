import { store } from "../store/store";
import { ethers } from "ethers";

export const withdrawEth = async ({ amount, massage }) => {
    try {

        console.log(amount, massage);

        if (massage.trim().length <= 0) {
            console.error("You have to provide a massage which show that for what purpose you want to withdraw");
            return new Error("You have to provide a massage which show that for what purpose you want to withdraw");

        }

        if (Number(amount) < 0) {
            console.error("only owner can withdraw ethers");
            return new Error("only owner can withdraw ethers");
        }
        // make sure that the caller is owner.
        const { web3Api, general: { ownerAddress, availBalance } } = store.getState();
        if (ownerAddress && web3Api?.signer?.address !== ownerAddress) {
            console.error("only owner can withdraw ethers");
            return new Error("only owner can withdraw ethers");
        }

        if (Number(availBalance) < amount) {
            console.error("not enough ethers are available to withdraw");
            return new Error("not enough ethers are available to withdraw");
        }

        await web3Api.contract.withdraw(ethers.parseEther(amount), massage);

        console.log("successfully done withdrawal");
        // success
        return true;

    } catch (error) {
        console.error('error while donating ethers', error);
        return false;
    }
}
