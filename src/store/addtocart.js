import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addToCart = createAsyncThunk('cart/addtocart', async (id) => {
    try {
        // const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/cart/addincart',
        const response = await axios.post('https://ngglobalwebapi20231210182820.azurewebsites.net/api/cart/addincart',
        {
            productId: id,
            
        },
        {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))}`,}}
        )
        return response;
    }catch(error) {
        throw error
    }
})

const addToCartSlice = createSlice ({
    name: 'addtocart',
    initialState: {
        error: null,
        addToCart: false,
        loading: false,
    },
    reducers: {

    },
    extraReducers: { 
        [addToCart.pending]: (state) => {
        state.loading = true
        },
        [addToCart.fulfilled]: (state) => {
            state.loading = false
        },
        [addToCart.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default addToCartSlice.reducer