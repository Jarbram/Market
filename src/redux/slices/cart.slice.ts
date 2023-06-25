import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartAddState {
    id: string | number;
    image: string;
    name: string;
    info: string;
}

interface CartRemoveState {
    id: string | number;
}

const initialState: CartAddState[] = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartAddState>) {
            if(
                state.length === 0 ||
                state.filter((item) => item.id === action.payload.id).length === 0
            ){
                state.push(action.payload);
            }
        },
        removeToCart(state, action: PayloadAction<CartRemoveState>) {
            if(state.some((item) => item.id === action.payload.id)){
                return state = state.filter((item) => item.id !== action.payload.id);
            }
        }
    }
});

export const { addToCart, removeToCart} = cartSlice.actions;