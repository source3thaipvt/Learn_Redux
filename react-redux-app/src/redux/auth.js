import callApi from "../api/callApi";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action){
            state.token = action.payload.token
        }
    }
})
const { loginSuccess } = auth.actions

const a = 'https://codersx-swagger.glitch.me/api/auth/login';
const b = 'https://http://localhost:3000/auth';
export const login = ({email, password}) => async dispatch =>{
    const res = await axios.post(b, {
        email, password
    })
    dispatch(loginSuccess(res.data))
}

export default auth.reducer;
