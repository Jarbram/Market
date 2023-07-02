import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage";

interface CartAddState {
    id: string | number;
    image: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartRemoveState {
    id: string | number;
}

const initialState: CartAddState[] = getItem('cart') || []

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
        },
        incrementQuantity(state, action: PayloadAction<CartRemoveState>) {
            const { id } = action.payload;
            const item = state.find((cartItem) => cartItem.id === id);
            if (item) {
                item.quantity += 1;
                item.price = item.price / (item.quantity - 1) * item.quantity;
            }
        },
        decrementQuantity(state, action: PayloadAction<CartRemoveState>) {
            const { id } = action.payload;
            const item = state.find((cartItem) => cartItem.id === id);
            
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.price = item.price / (item.quantity + 1) * item.quantity;
                return state;
            } else {
                return state = state.filter((item) => item.id !== id);
            }
        },
    }
});

export const { addToCart, removeToCart,incrementQuantity,decrementQuantity} = cartSlice.actions;