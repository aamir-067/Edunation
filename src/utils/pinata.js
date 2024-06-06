
import { pinataJWT } from "../CONSTANTS";

export const uploadByPinata = async (file, prevImg = null) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        const metadata = JSON.stringify({
            name: `profile${Date.now()}`,
        });
        formData.append("pinataMetadata", metadata);

        const options = JSON.stringify({
            cidVersion: 0,
        });
        formData.append("pinataOptions", options);

        const res = await fetch(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${pinataJWT}`,
                },
                body: formData,
            }
        );

        const resData = await res.json();
        return resData.IpfsHash;
    } catch (error) {
        console.log(error);
    }
}