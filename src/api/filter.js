import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const filterDate = createAsyncThunk(
  "filter/date",
  async (inputValue, { rejectWithValue }) => {
    try {
      const res = await API.post(`?date_start=${inputValue}`);
      return res;
    } catch (err) {
      rejectWithValue(err.res.data);
    }
  }
);
