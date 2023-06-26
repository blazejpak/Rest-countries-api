import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "data",
  initialState: {
    darkMode: false,
  },
  reducers: {
    themeReducer: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { themeReducer } = themeSlice.actions;

export default themeSlice.reducer;
