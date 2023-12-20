import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progressWidth: 0,
  isOpenLanding: true,
  isOpenLogin: false,
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
  },
});

export const { setProgressWidth, toogleLanding, toogleLogin } =
  appSlice.actions;

export default appSlice.reducer;
