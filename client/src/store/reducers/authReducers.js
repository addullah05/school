import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        token: null
    },
    reducers: {
        setToken: (state, action) => {
           state.token = action.payload;
        }
    }
})

export const {setToken} = authReducer.actions;
export default authReducer.reducer;