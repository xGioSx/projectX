import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const myCart = createAsyncThunk('cart/mycart', async () => {
    try {
        // const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/cart/getmycartproducts',
        const response = await axios.get('https://digitalamazon.azurewebsites.net/api/cart/getmycartproducts',
        {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))}`,}}
        )
        console.log(response)
        return response.data;
    }catch(error) {
        throw error
    }
})

const myCartSlice = createSlice ({
    name: 'myCart',
    initialState: {
        error: null,
        products: [],
        loading: false,
    },
    reducers: {

    },
    extraReducers: { 
        [myCart.pending]: (state) => {
        state.loading = true
        },
        [myCart.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        [myCart.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default myCartSlice.reducer