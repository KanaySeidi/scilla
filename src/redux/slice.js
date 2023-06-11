import { createSlice } from "@reduxjs/toolkit";
import { postData } from "../api/api";

const postDataSlice = createSlice({
  name: "postData",
  initialState: {
    data: [],
    status: "active",
    message: "",
  },

  extraReducers: {
    [postData.pending]: (state) => {
      state.status = "loading";
    },
    [postData.fulfilled]: (state, action) => {
      state.status = "active";
      state.data = action.payload.data.results;
    },
    [postData.rejected]: (state, action) => {
      state.status = "active";
      state.message = action.payload;
    },
  },
});

export default postDataSlice;
