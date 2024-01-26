import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions/actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// const startingState = store.getState();
// console.log(startingState, 1);

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song",
// });

// const finalState = store.getState();
// console.log(finalState, 2);

//console.log(store);

// console.log(songsSlice.actions);
// console.log(songsSlice.actions.addSong("New Song"));
