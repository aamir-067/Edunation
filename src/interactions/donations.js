import { ethers } from "ethers";
import { getTopDonation } from "./helpers";
import { store } from "../store/store";
import { toast } from "react-hot-toast";
import { uploadByPinata } from "../utils/pinata";
export const donateEth = async ({ name, img, amount, message }) => {
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

            if (img) {
                const res = await uploadByPinata(img, topDonation[3].length && topDonation[3]);
                imageLink = res
            }
        }


        await contract.donate(
            name.trim().length > 0 ? name.trim() : "",
            imageLink,
            message.trim().length > 0 ? message.trim() : "",
            { value: ethers.parseEther(amount + "") }
        );

        // success
        toast.success("donation successful");
        return true;

    } catch (error) {
        console.log(error);
        toast.error("Donation failed");
        return false;
    }
}
