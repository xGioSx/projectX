import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registration = createAsyncThunk('user/register', async ({userName, password, email}) => {
    // const {userName, password, email} = user
    console.log(userName, password, email)
    try {
        const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/user/registerUser',
        {
            userName: userName,
            password: password,
            email: email
        },
        {headers: {'Content-Type': 'application/json'}}
        )
        return response;
    }catch(error) {
        throw error
    }
})

const registerSlice = createSlice ({
    name: 'registration',
    initialState: {
        error: null,
        registered: false,
        loading: false,
    },
    reducers: {

    },
    extraReducers: {
        [registration.fulfilled]: (state) => {
            state.loading = false
        },
        [registration.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default registerSlice.reducer