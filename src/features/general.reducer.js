import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    topDonation: null,
    availBalance: null,
    transactions: null,
    ownerAddress: null
}

// export const setupWeb3 = createAsyncThunk('web3Api', async (web3Payload, thunkAPI) => {
// your async calls here
//     return {
//         contract : web3payload.contract,
//         provider: web3Payload.provider,
//         signer: web3Payload.signer,
//     };
// });

const generalReducer = createSlice({
    name: 'web3Api',
    initialState,
    reducers: {
        setRecords: (state, action) => {
            state.topDonation = action.payload.topDonation;
            state.transactions = action.payload.transactions;
            state.availBalance = action.payload.availBalance;
            state.ownerAddress = action.payload.ownerAddress;
        }
    }
})
export const { setRecords } = generalReducer.actions;
export default generalReducer.reducer;