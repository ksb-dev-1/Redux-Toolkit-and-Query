// redux
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "@/store";

// faker.js
import { createRandomMovie } from "@/data";

function MoviePlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of movies
  const moviePlaylist: any = useSelector((state: any) => state.movies);

  const handleMovieAdd = (movie: any) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: any) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie: any) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="bg-[tomato] text-white px-4 py-2 rounded"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="bg-[#4285F4] text-white px-4 py-2 rounded"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
