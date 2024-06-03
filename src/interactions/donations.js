import { getTopDonation } from "./helpers";


export const donateEth = async ({ name, img, amount, massage, contract }) => {
    try {
        if (amount < 0.01) {
            return new Error("donation must be greater or equal to 0.01 eth");
        }

        // ! only upload image of that person which will be a top donator.
        let imageLink = "";

        const topDonation = await getTopDonation({ contract });
        if (+ethers.formatEther(topDonation[2]) < amount) {
            // it will be a top donation of all time.
            // upload the image if available to cloudinary.
        }


        await contract.donate(
            name.trim().length > 0 ? name.trim() : "unknown",
            imageLink,
            massage.trim().length > 0 ? massage.trim() : "",
            { value: ethers.parseEther(amount + "") }
        );

        // success
        return true;

    } catch (error) {
        console.error('error while donating ethers', error);
        return false;
    }
}
