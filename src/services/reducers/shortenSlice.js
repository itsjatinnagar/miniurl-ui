import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";

const initialState = {
  links: [],
  loading: false,
};

export const fetchLinks = createAsyncThunk(
  "shorten/fetch",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    const response = await request("/links");

    const data = await response.json();

    if (response.status === 200) return fulfillWithValue(data);

    return rejectWithValue(data);
  }
);

export const createShorten = createAsyncThunk(
  "shorten/create",
  async (code, { fulfillWithValue, rejectWithValue }) => {
    const response = await request("/shorten", "POST", { code });

    const data = await response.json();

    if (response.status === 200) return fulfillWithValue(data);

    return rejectWithValue(data);
  }
);

export const shortenSlice = createSlice({
  name: "shorten",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.links = action.payload["data"]["links"];
      })
      .addCase(fetchLinks.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createShorten.pending, (state) => {
        state.loading = true;
      })
      .addCase(createShorten.fulfilled, (state, action) => {
        state.loading = false;
        state.links.unshift(action.payload["data"]);
      })
      .addCase(createShorten.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default shortenSlice.reducer;
