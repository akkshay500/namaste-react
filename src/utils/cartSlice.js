import { createSlice } from "@reduxjs/toolkit";

// This slice will manage the cart state in the redux store
// It will have the initial state and the reducers to update the state
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state, action)=>{
            /*
            In Vanilla Redux, we have to return a new state object and spread the old state object into it.
            It used to give the error DON'T MUTATE THE STATE.
            const newState = [...state]; // this will create a new state object
            newState.items.push(action.payload); // this will add the item to the cart]
            return newState; // this will return the new state object, this was mandatory in vanilla redux.
            In Redux Toolkit, we can directly mutate the state object and it will take care of returning a new state object.
            Redux behind the scenes uses immer.js library to make sure that we are not mutating the state object directly.
            */

            // state.items.push("Burger"); // this will add the item to the cart
            // We are mutating the state here.
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            /* If you do normal console.log(state), it will not print the values, for checking the actual value, we need to 
            write console.log(current(state)) where current will be imported from redux toolkit 
            console.log(current(state)); // this will print the current state object
            console.log(state); // this will print the state object, but it will not be the current state object.
            you can either use the below code to empty the cart or you can use 
            return {items[]}; // this will return a new state object with empty items array.
            There is a Redux DevTools extension that will help you to see the state of the store and the actions that are being dispatched. 
            Very useful for debugging redux.
            */
            state.items.length = 0; //empty all the items in the cart
        }
    }
});

// The actions are the functions that will be used to update the state, these are provided by redux toolkit in cartSlice.actions
// The reducer is the function that will be used to update the state in the store
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;