"use client";
import { useState } from "react";
import Header from "./components/Header";
import LyricsBox from "./components/LyricsBox";
import SongList from "./components/SongList";
import SelectedSongs from "./components/SelectedSongs";
import { songs } from "./dummydata";
import { SongData } from "./types";
import SongBooklet from "./components/SongBooklet";

export default function Home() {
  const [selectedSong, setSelectedSong] = useState(songs[0]); // Default song
  const [selectedSongs, setSelectedSongs] = useState<SongData[]>([]);

  // Add song to selected list (if not already added)
  const handleSelectSong = (song: SongData) => {
    setSelectedSongs((prev) => (prev.some((s) => s.id === song.id) ? prev : [...prev, song]));
  };

  // Remove song from selected list
  const handleRemoveSong = (songId: number) => {
    setSelectedSongs((prev) => prev.filter((song) => song.id !== songId));
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        {/* Left-aligned content */}
        <div className="flex flex-col">
          <SongList onSelectSong={setSelectedSong} onAddToSelected={handleSelectSong} />
          <LyricsBox lyrics={selectedSong.lyrics} />
          <SelectedSongs selectedSongs={selectedSongs} onRemoveSong={handleRemoveSong} />
        </div>

        {/* Centered SongBooklet */}
        <div className="flex flex-1 justify-center">
          <SongBooklet selectedSongs={selectedSongs} />
        </div>
      </div>
    </div>
  );
}