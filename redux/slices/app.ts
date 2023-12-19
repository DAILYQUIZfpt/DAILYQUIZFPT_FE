import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progressWidth: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProgressWidth: (state, action) => {
      state.progressWidth = action.payload;
    },
  },
});

export const { setProgressWidth } = appSlice.actions;

export default appSlice.reducer;
