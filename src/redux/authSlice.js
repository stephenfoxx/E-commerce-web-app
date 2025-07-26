import { createSlice } from "@reduxjs/toolkit";

const initiaValue = {
    email: "",
    password: "",
    confirm_password: "",
    loggedinRed: false
}


export const authSlice = createSlice({
    name: "auth",
    initialState: initiaValue,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => { 
            state.password = action.payload;
        },
        setConfirmPassWord: (state, action) => {
            state.confirm_password = action.payload;
        },
        setLoggedin: (state, action) => {

            state.loggedinRed = action.payload
         }


    }
})


export const { setEmail, setPassword, setConfirmPassWord, setLoggedin } = authSlice.actions

export default authSlice.reducer
