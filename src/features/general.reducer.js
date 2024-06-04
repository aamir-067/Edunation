import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    topDonation: null,
    availBalance: null,
    transactions: null,
    ownerAddress: null
}

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