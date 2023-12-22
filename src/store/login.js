import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const user = JSON.parse(localStorage.getItem("user"));
export const signin = createAsyncThunk('user/signin', async ({email, password}) => {
    
    try {
        // const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/User/LogIn',
        const response = await axios.post('https://ngglobalwebapi20231210182820.azurewebsites.net/api/User/LogIn',
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

export const signout = createAsyncThunk('user/signout', async () => {
    localStorage.removeItem('user')
})

const signinSlice = createSlice ({
    name: 'signin',
    initialState: {
        error: null,
        loading: false,
        isLoggedIn: JSON.parse(localStorage.getItem("user"))? true : false
    },
    reducers: {

    },
    extraReducers: {     
        [signin.pending]: (state) => {
        state.loading = true;
        state.isLoggedIn = false
        },
        [signin.fulfilled]: (state) => {
            state.loading = false;
            state.isLoggedIn = true
        },
        [signin.rejected]: (state) => {
            state.loading = false;
            state.isLoggedIn = false
        },
        [signout.pending]: (state) => {
            state.loading = true;
        },
        [signout.fulfilled]: (state) => {
            state.loading = false;
            state.isLoggedIn = false
        }
    }
})

export default signinSlice.reducer