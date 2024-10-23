import { configureStore } from "@reduxjs/toolkit";
import viewProductReducer from "../features/viewProductsSlice.js";
import searchProductReducer  from "../features/searchProductSlice.js";

export const store = configureStore({
  reducer: {
    viewProduct: viewProductReducer,
    searchProduct: searchProductReducer
  },
});
