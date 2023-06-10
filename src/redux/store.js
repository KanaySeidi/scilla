import { configureStore } from "@reduxjs/toolkit";
import postDataSlice from "./slice";

export const store = configureStore({
  reducer: {
    db: postDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
