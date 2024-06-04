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
        console.log(store.getState().web3Api);
        return true;
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
            console.log(store.getState().web3Api.signer.address);
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
        const { contract } = store.getState().web3Api;
        if (!contract) {
            console.log("error while getting topDonation. please refresh the page.");
            return false;
        }
        const topDonation = await contract.topDonor();

        const recentRecord = store.getState().general;
        store.dispatch(setRecords({ ...recentRecord, topDonation }));
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
            return false;
        }
        const currentBalance = await contract.availableBalance();
        const availBalance = ethers.formatEther(currentBalance);
        store.dispatch(setRecords({ ...recentRecord, availBalance }));
        return true;

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
        store.dispatch(setRecords({ ...recentRecord, ownerAddress }));
        return true;
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