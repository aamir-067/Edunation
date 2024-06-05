import { connectWalletProvider, getAvailableBalance, getRecentTransactions, getTopDonation } from "./helpers"

export const getStartingData = async () => {
    await connectWalletProvider()
    const transactions = await getRecentTransactions();
    const topDonation = await getTopDonation();
    const availBalance = await getAvailableBalance();

    return { transactions, topDonation, availBalance };

}