import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    contract: null,
    provider: null,
    signer: null
}

// export const setupWeb3 = createAsyncThunk('web3Api', async (web3Payload, thunkAPI) => {
// your async calls here
//     return {
//         contract : web3payload.contract,
//         provider: web3Payload.provider,
//         signer: web3Payload.signer,
//     };
// });

const web3Api = createSlice({
    name: 'web3Api',
    initialState,
    reducers: {
        initWeb3: (state, action) => {
            state.contract = action.payload.contract;
            state.signer = action.payload.signer;
            state.provider = action.payload.provider;
        },
        resetWeb3Api: (state) => {
            state.signer = null
        }
    }
})
export const { initWeb3, resetWeb3Api } = web3Api.actions;
export default web3Api.reducer;