import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";

const initialState = {
  user: null,
  loading: false,
};

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    const response = await request("/user");

    const data = await response.json();

    if (response.status === 200) return fulfillWithValue(data);

    return rejectWithValue(data);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload["data"];
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
