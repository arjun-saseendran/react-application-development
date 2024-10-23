import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchProduct: {
    price: 0
  },
};

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    searchValue: (state, action) => {
      state.searchProduct.price = action.payload;
    },
  },
});

export default searchProductSlice.reducer;
export const { searchValue } = searchProductSlice.actions;
