import { store } from "../store/store";
import { ethers } from "ethers";
import toast, { } from "react-hot-toast";
export const withdrawEth = async ({ amount, message }) => {
    try {


        if (message.trim().length <= 0) {
            toast.error("Please enter a valid message");
            console.error("You have to provide a message which show that for what purpose you want to withdraw");
            return;
        }

        if (Number(amount) <= 0) {
            toast.error("Please enter a valid amount");
            return new Error("only owner can withdraw ethers");
        }
        // make sure that the caller is owner.
        const { web3Api, general: { ownerAddress, availBalance } } = store.getState();

        if (ownerAddress && web3Api?.signer?.address !== ownerAddress) {
            toast.error("permission denied");
            return false;
        }

        if (Number(availBalance) < amount) {
            toast.error("Insufficient balance");
            return new Error("not enough ethers are available to withdraw");
        }

        await web3Api.contract.withdraw(ethers.parseEther(amount), message);

        toast.success("successfully done withdrawal");
        // success
        return true;

    } catch (error) {
        console.error('error while donating ethers', error);
        return false;
    }
}
