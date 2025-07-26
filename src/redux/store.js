import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    authSlice,
    userSlice,
    cartSlice
  },
});
