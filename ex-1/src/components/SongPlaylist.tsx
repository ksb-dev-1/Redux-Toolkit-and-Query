// redux
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "@/store";

// faker.js
import { createRandomSong } from "../data";

function SongPlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist: any = useSelector((state: any) => state.songs);

  const handleSongAdd = (song: any) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song: any) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song: any) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="bg-[#4285F4] text-white px-4 py-2 rounded"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
