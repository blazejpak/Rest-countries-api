import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    fetchedData: [],
  },
  reducers: {
    dataReducer: (state, action) => {
      state.fetchedData = action.payload;
    },
  },
});
export const { dataReducer } = dataSlice.actions;

export default dataSlice.reducer;
