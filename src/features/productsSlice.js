import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    renderProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default productsSlice;
export const { renderProducts } = productsSlice.actions;
