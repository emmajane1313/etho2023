import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItemsState {
  items: {
    size: string;
    color: string;
    amount: number;
    id: string;
    level: number;
  }[];
}

const initialCartItemsState: CartItemsState = {
  items: [],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartItemsState,
  reducers: {
    setCartItems: (state: CartItemsState, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setCartItems } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
