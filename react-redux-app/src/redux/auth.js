import callApi from "../api/callApi";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
//   token: null,
  token: "ewqewq",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
        // state.token = (Math.random()*30)
    },
  },
});
const { loginSuccess } = auth.actions;

const a = "https://codersx-swagger.glitch.me/api/auth/login";
const b = "https://http://localhost:3001/auth";
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const res = await axios.post(b, {
      email,
      password,
    });
    dispatch(loginSuccess(res.data));
  };

export default auth.reducer;
