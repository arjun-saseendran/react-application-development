import { configureStore } from "@reduxjs/toolkit";
import viewProductReducer from "../features/viewProductSlice.js";

export const store = configureStore({
  reducer: {
    viewProduct: viewProductReducer,
  },
});
