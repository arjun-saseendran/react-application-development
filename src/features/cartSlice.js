import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartCount: 0
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload)
      state.cartCount = state.cartProducts.length

    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
