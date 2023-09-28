import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getMostDemandProducts = createAsyncThunk('products/mostDemandProducts', async () => {
    try {
        const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/product/mostdemandproducts')
        const data = response.data
        return data
    }catch (error) {
        return error;
    }
})


const mostDemandProducts = createSlice({
    name: 'mostDemandProducts',
    initialState: {
        error:null,
        mostDemandProducts: [],
        loading: false,
    },
    redusers: {

    },
    extraReducers: {
        [getMostDemandProducts.pending]: (state) => {
            state.loading = true
        },
        [getMostDemandProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.mostDemandProducts = action.payload
        },
        [getMostDemandProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }

})

export default mostDemandProducts.reducer
