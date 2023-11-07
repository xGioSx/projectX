import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk ('products/getSingleProduct', async (id) => {
    try {
        // const response = await axios.get(`https://amazon-digital-prod.azurewebsites.net/api/product/products/${id}`)
        const response = await axios.get(`https://digitalinstitute-amazon.azurewebsites.net/api/product/products/${id}`)
        const data = response.data
        return data
    }catch (error) {
        throw error
    }
});




const singleProductSlice = createSlice( {
    name: 'singleProduct',
        initialState: {
            error: null,
            singleproduct: {},
            images: [],
            loading: false,
        },
        reducers: {

        },

        extraReducers: {
            [getSingleProduct.pending]: (state) => {
                state.loading = true
            },
            [getSingleProduct.fulfilled]: (state, action) => {
                state.loading = false
                state.singleproduct = action.payload
                state.images = action.payload.images
            },
            [getSingleProduct.rejected]: (state, action) => {
                state.loading = false
                state.error = action.payload
            },
        }
    
})

export default singleProductSlice.reducer