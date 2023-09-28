import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk('product/products', async () => {
    try {
        const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/product/products');
        const data = response.data;
        return data;
    }catch(error) {
        return error
    }
})

const productSlice = createSlice ({
    name: 'products',
    initialState: {
        null: null,
        products: [],
        loading: false,
    },
    reducers: {

    },

    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default productSlice.reducer