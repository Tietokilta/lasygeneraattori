"use client";
import { useState } from "react";
import LyricsBox from "./components/LyricsBox";
import SongList from "./components/SongList";
import SelectedSongs from "./components/SelectedSongs";
import { songs } from "./dummydata";
import { SongData } from "./types";
import SongBooklet from "./components/SongBooklet";
import FrontpageInfo from "./components/FrontpageInfo";

export default function Home() {
  const [selectedSong, setSelectedSong] = useState(songs[0]); // Default song
  const [selectedSongs, setSelectedSongs] = useState<SongData[]>([]);

  // Add song to selected list (if not already added)
  const handleSelectSong = (song: SongData) => {
    setSelectedSongs((prev) =>
      prev.some((s) => s.id === song.id) ? prev : [...prev, song]
    );
  };

  // Remove song from selected list
  const handleRemoveSong = (songId: number) => {
    setSelectedSongs((prev) => prev.filter((song) => song.id !== songId));
  };

  return (
    <div className="flex h-screen">
      {/* Left side (50% width) */}
      <div className="w-1/2 flex flex-col p-4">
        {/* Row layout for SongList and FrontpageInfo */}
        <div className="flex">
          <div className="w-1/2 p-2">
            <SongList
              onSelectSong={setSelectedSong}
              onAddToSelected={handleSelectSong}
            />
          </div>
          <div className="w-1/2 p-2">
            <FrontpageInfo />
          </div>
        </div>

        {/* Column layout for LyricsBox and SelectedSongs */}
        <LyricsBox lyrics={selectedSong.lyrics} />
        <SelectedSongs
          selectedSongs={selectedSongs}
          onRemoveSong={handleRemoveSong}
        />
      </div>

      {/* Right side - SongBooklet (50% width) */}
      <div className="w-1/2 flex justify-center p-4">
        <SongBooklet selectedSongs={selectedSongs} />
      </div>
    </div>
  );
}
