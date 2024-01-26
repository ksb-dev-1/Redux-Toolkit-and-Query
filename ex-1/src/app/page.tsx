"use client";

// redux
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/store";

// components
import MoviePlaylist from "@/components/MoviePlaylist";
import SongPlaylist from "@/components/SongPlaylist";

export default function Home() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="max-w-6xl flex flex-col mx-auto px-4">
      <button
        onClick={() => handleResetClick()}
        className="text-start bg-red-500 text-white px-4 py-2 rounded w-fit my-4"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
