import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        logout:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
});
const userSlice2 = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers:{
        RegisterStart:(state)=>{
            state.isFetching = true
        },
        RegisterSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        RegisterFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {loginStart, loginSuccess, loginFailure,logout} = userSlice.actions
export const {RegisterStart, RegisterSuccess, RegisterFailure} = userSlice2.actions

export default userSlice.reducer;