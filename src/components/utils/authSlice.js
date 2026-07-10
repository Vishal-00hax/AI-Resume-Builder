import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
