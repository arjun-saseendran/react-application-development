import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchPrice: null,
};

const searchSlice = createSlice({
  name: "searchPrice",
  initialState,
  reducers: {
    searchValue: (state, action) => {
      state.searchPrice = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { searchValue } = searchSlice.actions;
