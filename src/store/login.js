import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const signin = createAsyncThunk('user/signin', async ({email, password}) => {

    try {
        const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/User/LogIn',
        {
            email: email,
            password: password,
        },
        {headers: {'Content-Type': 'application/json'}}
        )
        localStorage.setItem('user', JSON.stringify(response.data.jwt));
        return response.data;
    }catch(error) {
        throw error
    }
})

const signinSlice = createSlice ({
    name: 'signin',
    initialState: {
        error: null,
        loading: false,
    },
    reducers: {

    },
    extraReducers: {     
        [signin.pending]: (state) => {
        state.loading = false;
        state.isLoggedIn = true
        },
        [signin.fulfilled]: (state) => {
            state.loading = false;
        },
        [signin.rejected]: (state) => {
            state.loading = false;
            state.isLoggedIn = true
        }
    }
})

export default signinSlice.reducer