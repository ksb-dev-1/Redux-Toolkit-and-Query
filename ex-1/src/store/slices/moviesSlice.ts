import { createSlice } from "@reduxjs/toolkit";
import { reset } from "..";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [] as string[],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    // reset(state) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, (sate) => []);
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
