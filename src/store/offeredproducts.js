import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getOfferedProducts = createAsyncThunk('products/getOfferedProducts', async () => {
    try {
        // const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/product/offers');
        const response = await axios.get('https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/offers');
        const data = response.data
        return data
    }catch (error) {
        return error;
}
});

const offeredProductsSilce = createSlice({
  name: 'offeredProducts',
      initialState: {
        error:null,
        offeredProducts: [],
        loading: false,
    },
      reducers: {

  },
  extraReducers: {
    [getOfferedProducts.pending]: (state) => {
      state.loading = true
    },
    [getOfferedProducts.fulfilled]: (state, action) => {
      state.loading = false
      state.offeredProducts = action.payload
    },
    [getOfferedProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})


export default offeredProductsSilce.reducer
