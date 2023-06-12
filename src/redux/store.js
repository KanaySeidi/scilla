import { configureStore } from "@reduxjs/toolkit";
import postDataSlice from "./slice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    db: postDataSlice.reducer,
    date: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
