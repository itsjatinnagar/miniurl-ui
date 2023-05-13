import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalSlice";
import userReducer from "./reducers/userSlice";
import authReducer from "./reducers/authSlice";
import shortenReducer from "./reducers/shortenSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    auth: authReducer,
    shorten: shortenReducer,
  },
});
