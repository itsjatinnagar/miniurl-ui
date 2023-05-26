import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";
import { toast } from "react-toastify";

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
        toast.success("Code Sent Successfully");
      })
      .addCase(sendCode.rejected, (state, action) => {
        state.loading = false;
        toast.error("Something Went Wrong");
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
        if (action.payload.message === "incorrect code") {
          toast.error("Incorrect Code");
        } else {
          toast.error("Something Went Wrong");
        }
      });
  },
});

export default authSlice.reducer;
