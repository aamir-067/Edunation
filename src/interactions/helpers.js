import { edunationAddress, rpcUrl } from "../CONSTANTS";
import Edunation from "../artifacts/Edunation.json";
import { ethers } from "ethers";
import { store } from "../store/store";
import { initWeb3 } from "../features/web3Api.reducer";
export const connectWalletProvider = async () => {
    try {
        let provider;
        if (window.ethereum) {
            provider = new ethers.BrowserProvider(window.ethereum);
            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await connectWalletSigner();
            });
            window.ethereum.on('accountsChanged', async () => {
                await connectWalletSigner();
            });
        } else {
            // "metamask is not installed"
            // use a custom rpc node url like alchemy
            provider = new ethers.getDefaultProvider(rpcUrl);
        }
        const edunation = new ethers.Contract(edunationAddress, Edunation.abi, provider);
        store.dispatch(initWeb3({ provider, contract: edunation, signer: null }));
        return { edunation, provider };
    } catch (e) {
        console.error(e);
        return "something went wrong while connecting to metamask";
    }
};

export const connectWalletSigner = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const edunation = new ethers.Contract(edunationAddress, Edunation.abi, signer);
            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await connectWalletSigner();
            });
            window.ethereum.on('accountsChanged', async () => {
                await connectWalletSigner();
            });
            store.dispatch(initWeb3({ provider, contract: edunation, signer }));
            return { signer, edunation };
        } else {
            // "metamask is not installed"
            return undefined;
        }
    } catch (e) {
        console.error(e);
        return new Error("something went wrong while connecting to metamask");
    }
};



export const getTopDonation = async ({ contract }) => {
    try {

        const topDonation = await contract.topDonor();
        return topDonation;

    } catch (error) {
        console.error("something went wrong while getting top donation", error);
    }
}


export const getAvailableBalance = async ({ contract }) => {
    try {
        const currentBalance = await contract.availableBalance();
        return Number(ethers.formatEther(currentBalance));
    } catch (error) {
        console.error("error while getting the current available balance of the contract.", error);
        return new Error("error while getting the current available balance of the contract");
    }
}

export const getOwner = async ({ contract }) => {
    try {
        const owner = await contract.owner();
        return owner;
    } catch (error) {
        console.error("error while getting the owner of the contract.", error);
        return new Error("error while getting the owner of the contract");
    }
}





export const getRecentTransactions = async ({ contract }) => {
    try {
        const transactions = await contract.recentTransactions();
        return transactions;
    } catch (error) {
        console.error("something went wrong while getting recent transactions", error);
    }
}