import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";
import { toast } from "react-toastify";

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
  async (link, { fulfillWithValue, rejectWithValue }) => {
    const response = await request("/shorten", "POST", { link });

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
        toast.error("Something Went Wrong");
      })
      .addCase(createShorten.pending, (state) => {
        state.loading = true;
      })
      .addCase(createShorten.fulfilled, (state, action) => {
        state.loading = false;
        state.links.unshift(action.payload["data"]);
        toast.success("MiniUrl Created Successfully");
      })
      .addCase(createShorten.rejected, (state, action) => {
        state.loading = false;
        toast.error("Something Went Wrong");
      });
  },
});

export default shortenSlice.reducer;
