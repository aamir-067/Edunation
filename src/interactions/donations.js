import { ethers } from "ethers";
import { getTopDonation } from "./helpers";
import { store } from "../store/store";

export const donateEth = async ({ name, img, amount, massage }) => {
    try {
        if (amount < 0.01) {
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


        console.log({ name, img, amount, massage });
        const res = await contract.donate(
            name.trim().length > 0 ? name.trim() : "",
            imageLink,
            massage.trim().length > 0 ? massage.trim() : "",
            { value: ethers.parseEther(amount + "") }
        );


        console.log("response of donation : ", res);

        // success
        return true;

    } catch (error) {
        console.error('error while donating ethers', error);
        return false;
    }
}
