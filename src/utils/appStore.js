import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// This is the store that will be used to manage the state of the application
// It will have the cart reducer to manage the cart state
const appStore = configureStore({
    // This reducer will be responsible for modifying the appStore.
    // For each slice, we will have a different reducer.
    reducer:{
        cart: cartReducer,
        //user: userReducer, // if you have a user reducer, you can add it here
    },
});

export default appStore;