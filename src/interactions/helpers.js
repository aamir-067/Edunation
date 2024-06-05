import { edunationAddress, rpcUrl } from "../CONSTANTS";
import Edunation from "../artifacts/Edunation.json";
import { ethers } from "ethers";
import { store } from "../store/store";
import { initWeb3 } from "../features/web3Api.reducer";
import { setRecords } from "../features/general.reducer";
export const connectWalletProvider = async () => {
    try {
        let provider;
        if (window.ethereum) {
            provider = new ethers.BrowserProvider(window.ethereum);
            // listen to wallet events
            window.ethereum.on('chainChanged', async () => {
                await connectWalletProvider();
            });
            window.ethereum.on('accountsChanged', async () => {
                await connectWalletProvider();
            });
        } else {
            // "metamask is not installed"
            // use a custom rpc node url like alchemy
            provider = new ethers.getDefaultProvider(rpcUrl);
        }
        const edunation = new ethers.Contract(edunationAddress, Edunation.abi, provider);
        return { provider, contract: edunation, signer: null };
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
            return true;
        } else {
            // "metamask is not installed"
            return undefined;
        }
    } catch (e) {
        console.error(e);
        return new Error("something went wrong while connecting to metamask");
    }
};

export const getTopDonation = async () => {
    try {
        const { web3Api: { contract }, general } = store.getState();
        if (!contract) {
            console.log("error while getting topDonation. please refresh the page.");
            return false;
        }

        const topDonation = await contract.topDonor();

        store.dispatch(setRecords({ ...general, topDonation }));
        return true;

    } catch (error) {
        console.error("something went wrong while getting top donation", error);
    }
}


export const getAvailableBalance = async () => {
    try {
        const { contract } = store.getState().web3Api;
        if (!contract) {
            console.log("error while getting availableBalance. please refresh the page.");
            await connectWalletProvider();
        }
        const currentBalance = await contract.availableBalance();
        const availBalance = ethers.formatEther(currentBalance);
        console.log("available balance in wei", availBalance);
        const recentRecord = store.getState().general;
        store.dispatch(setRecords({ ...recentRecord, availBalance }));
        return availBalance;

    } catch (error) {
        console.error("error while getting the current available balance of the contract.", error);
        return new Error("error while getting the current available balance of the contract");
    }
}

export const getOwner = async () => {
    try {
        const { contract } = store.getState().web3Api;
        if (!contract) {
            console.log("error while getting owner address. please refresh the page.");
            return false;
        }
        const ownerAddress = await contract.owner();
        const recentRecord = store.getState().general;
        store.dispatch(setRecords({ ...recentRecord, ownerAddress }));
        return ownerAddress;
    } catch (error) {
        console.error("error while getting the owner of the contract.", error);
        return new Error("error while getting the owner of the contract");
    }
}





export const getRecentTransactions = async ({ contract }) => {
    try {

        const transactions = await contract.recentTransactions();
        const recentRecord = store.getState().general;
        store.dispatch(setRecords({ ...recentRecord, transactions }));
        return transactions;
    } catch (error) {
        console.error("something went wrong while getting recent transactions", error);
    }
}