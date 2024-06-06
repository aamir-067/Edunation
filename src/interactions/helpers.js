import { edunationAddress, rpcUrl } from "../CONSTANTS";
import { abi } from "../artifacts/Edunation.json";
import { ethers } from "ethers";
import { store } from "../store/store";
import { initWeb3 } from "../features/web3Api.reducer";
import { setRecords } from "../features/general.reducer";
import toast from "react-hot-toast";
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
        const edunation = new ethers.Contract(edunationAddress, abi, provider);

        edunation.on("newTransection", (performer, transactionType, _amount) => {
            const trxType = ethers.toNumber(transactionType) == 0 ? "donation" : "withdrawal";
            const amount = ethers.formatEther(_amount);
            toast(`new ${trxType} of ${amount} eth`, { id: performer });
        })
        store.dispatch(initWeb3({ provider, contract: edunation, signer: null }));
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
            const edunation = new ethers.Contract(edunationAddress, abi, signer);
            edunation.on("newTransection", (performer, transactionType, _amount) => {
                const trxType = ethers.toNumber(transactionType) == 0 ? "donation" : "withdrawal";
                const amount = ethers.formatEther(_amount);
                toast(`new ${trxType} of ${amount} eth`, { id: performer });
            })
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
        const web3Api = store.getState().web3Api;
        if (!web3Api.contract) {
            // console.log("error while getting topDonation. please refresh the page.");
            await connectWalletProvider();
        }

        const topDonation = await web3Api.contract.topDonor();
        const general = store.getState().general;
        store.dispatch(setRecords({ ...general, topDonation }));

        return topDonation;

    } catch (error) {
        console.error("something went wrong while getting top donation", error);
    }
}


export const getAvailableBalance = async () => {
    try {
        const web3Api = store.getState().web3Api;
        if (!web3Api.contract) {
            // console.log("error while getting available balance. please refresh the page.");
            await connectWalletProvider();
        }
        const currentBalance = await web3Api.contract.availableBalance();
        const availBalance = ethers.formatEther(currentBalance);
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
        const web3Api = store.getState().web3Api;
        if (!web3Api.contract) {
            // console.log("error while getting available balance. please refresh the page.");
            await connectWalletProvider();
        }

        const ownerAddress = await web3Api.contract.owner();
        const recentRecord = store.getState().general;
        store.dispatch(setRecords({ ...recentRecord, ownerAddress }));
        return ownerAddress;
    } catch (error) {
        console.error("error while getting the owner of the contract.", error);
        return new Error("error while getting the owner of the contract");
    }
}





export const getRecentTransactions = async () => {
    try {
        const web3Api = store.getState().web3Api;
        if (!web3Api.contract) {
            await connectWalletProvider();
        }
        const transactions = await web3Api.contract.recentTransactions();
        const recentRecord = store.getState().general;
        store.dispatch(setRecords({ ...recentRecord, transactions }));
        return transactions;

    } catch (error) {
        console.error("something went wrong while getting recent transactions", error);
    }
}