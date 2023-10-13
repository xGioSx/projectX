import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const deleteCart = createAsyncThunk('cart/removeFromCart', async (id) => {
//     try {
//         const response = await fetch('https://amazon-digital-prod.azurewebsites.net/api/cart/removefromcart',
//         {method: 'DELETE'},
//         {
//             productId: id, 
//         },
//         {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))}`,}}
//         )
//         return response;
//     }catch(error) {
//         throw error
//     }
// })

export const deleteCart = createAsyncThunk(
    'cart/removeFromCart',
    async (id) => {
      try {
        const response = await fetch(
          `https://amazon-digital-prod.azurewebsites.net/api/cart/removefromcart`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: id })
          }
        );
        return response.ok
      } catch (error) {
        throw error;
      }
    }
  );

const deleteCartSlice = createSlice ({
    name: 'removeFromCart',
    initialState: {
        error: null,
        loading: false,
    },
    reducers: {

    },
    extraReducers: { 
        [deleteCart.pending]: (state) => {
        state.loading = true
        },
        [deleteCart.fulfilled]: (state) => {
            state.loading = false
        },
        [deleteCart.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default deleteCartSlice.reducer