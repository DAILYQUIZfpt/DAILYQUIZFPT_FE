import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progressWidth: 0,
  isOpenLanding: true,
  isOpenLogin: false,
  isOpenForgot: false,
  isOpenVerification: false,
  isOpenChangePassword: false,
  isOpenRegister: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProgressWidth: (state, action) => {
      state.progressWidth = action.payload;
    },
    toogleLanding: (state, action) => {
      state.isOpenLanding = action.payload;
    },
    toogleLogin: (state, action) => {
      state.isOpenLogin = action.payload;
    },
    toogleForgot: (state, action) => {
      state.isOpenForgot = action.payload;
    },
    toogleVerification: (state, action) => {
      state.isOpenVerification = action.payload;
    },
    toogleChangePassword: (state, action) => {
      state.isOpenChangePassword = action.payload;
    },
    toogleRegister: (state, action) => {
      state.isOpenRegister = action.payload;
    },
  },
});

export const {
  setProgressWidth,
  toogleLanding,
  toogleLogin,
  toogleForgot,
  toogleVerification,
  toogleChangePassword,
  toogleRegister,
} = appSlice.actions;

export default appSlice.reducer;
