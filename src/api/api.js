import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const postData = createAsyncThunk(
  "users/postData",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await API.post(arg);
      return data;
    } catch (err) {
      rejectWithValue(err.res.data);
    }
  }
);
