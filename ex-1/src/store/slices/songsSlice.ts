import { createSlice } from "@reduxjs/toolkit";
import { reset } from "..";

const songsSlice = createSlice({
  name: "song",
  initialState: [] as string[],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    //builder.addCase("movie/reset", (sate) => []);
    //builder.addCase(moviesSlice.actions.reset.toString(), (sate) => []);
    builder.addCase(reset, (sate) => []);
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
