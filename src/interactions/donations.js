import { ethers } from "ethers";
import { getTopDonation } from "./helpers";
import { store } from "../store/store";
import { toast } from "react-hot-toast";
export const donateEth = async ({ name, img, amount, massage }) => {
    try {
        if (amount < 0.01) {
            toast.error("Please enter greater amount");
            return new Error("donation must be greater or equal to 0.01 eth");
        }

        const contract = store.getState().web3Api.contract;

        // ! only upload image of that person which will be a top donator.
        let imageLink = "";

        await getTopDonation({ contract });
        const { topDonation } = store.getState().general;
        if (+ethers.formatEther(topDonation[2]) < amount) {
            // it will be a top donation of all time.
            // upload the image if available to cloudinary.
        }

        const res = await contract.donate(
            name.trim().length > 0 ? name.trim() : "",
            imageLink,
            massage.trim().length > 0 ? massage.trim() : "",
            { value: ethers.parseEther(amount + "") }
        );

        // success
        toast.success("donation successful");
        return true;

    } catch (error) {
        console.error('error while donating ethers', error);
        toast.error("Donation failed");
        return false;
    }
}
