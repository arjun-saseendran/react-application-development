import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewProduct: {
    image: "",
    title: "",
    description: "",
    price: 0,
  },
};

const viewProductSlice = createSlice({
  name: "viewProduct",
  initialState,
  reducers: {
    viewProductDetails: (state, action) => {
      state.viewProduct = action.payload;
    },
  },
});

export default viewProductSlice.reducer;
export const { viewProductDetails } = viewProductSlice.actions;
