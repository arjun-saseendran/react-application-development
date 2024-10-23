import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice.js";
import searchReducer  from "../features/searchSlice.js";

export const store = configureStore({
  reducer: {
    cartProducts: cartReducer,
    searchPrice: searchReducer
  },
});
