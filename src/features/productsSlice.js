import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        renderProducts: (state, action) => {

        }
    }
})

export const {renderProducts} = productsSlice.actions