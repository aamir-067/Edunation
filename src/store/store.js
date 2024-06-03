import { configureStore } from "@reduxjs/toolkit"
import web3ApiReducer from "../features/web3Api.reducer";
export const store = configureStore({
    reducer: {
        web3Api: web3ApiReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});