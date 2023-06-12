import { createSlice } from "@reduxjs/toolkit";
import { filterDate } from "../api/filter";

const filterSlice = createSlice({
  name: "postData",
  initialState: {
    data: [],
    status: "active",
    message: "",
  },
  extraReducers: {
    [filterDate.pending]: (state) => {
      state.status = "loading";
    },
    [filterDate.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload;
    },
    [filterDate.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default filterSlice;
