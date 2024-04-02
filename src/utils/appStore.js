import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer, // Accessing the reducer property of the userSlice
    }
});

export default appStore;
