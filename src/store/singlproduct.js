import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSinglProduct = createAsyncThunk ('products/getSinglProduct', async () => {
    try {
        const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/product/products/id');
        const data = response.data
        return data
    }catch (error) {
        return error
    }
});


const singlProductSlice = createSlice( {
    name: 'singlproduct',
        initialState: {
            error: null,
            singlproduct: [],
            loading: false,
        },
        reducers: {

        },

        extraReducers: {
            [getSinglProduct.pending]: (state) => {
                state.loading = true
            },
            [getSinglProduct.fulfilled]: (state, action) => {
                state.loading = false
                state.singlproduct = action.payload
            },
            [getSinglProduct.rejected]: (state, action) => {
                state.loading = false
                state.error = action.payload
            },
        }
    
})

export default singlProductSlice.reducer