import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewProduct: {},
};

const viewProductSlice = createSlice({
  name: "viewProduct",
  initialState,
  reducers: {
    viewProductDetails: (state, action) => {
      const { image, title, description, price } = action.payload;
      state.viewProduct = { image, title, description, price };
    },
  },
});

export default viewProductSlice.reducer;
export const viewProductDetails = viewProductSlice.actions;
