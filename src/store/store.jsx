import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";
import themeSlice from "./reducers/themeSlice";

export const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
    themeSlice: themeSlice,
  },
});
