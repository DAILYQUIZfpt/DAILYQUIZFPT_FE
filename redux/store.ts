import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app";

export const store = configureStore({
  reducer: {
    app: app,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
