import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";

const initialState = {
  loading: false,
  isAuth: false,
  email: null,
};

export const sendCode = createAsyncThunk(
  "auth/sendCode",
  async (email, { fulfillWithValue, rejectWithValue }) => {
    const response = await request("/auth", "POST", { email });

    const data = await response.json();

    if (response.status === 200) return fulfillWithValue(data);

    return rejectWithValue(data);
  }
);

export const verifyCode = createAsyncThunk(
  "auth/verifyCode",
  async (code, { fulfillWithValue, rejectWithValue }) => {
    const response = await request("/verify", "POST", { code });

    const data = await response.json();

    if (response.status === 200) return fulfillWithValue(data);

    return rejectWithValue(data);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendCode.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.email;
      })
      .addCase(sendCode.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(verifyCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
