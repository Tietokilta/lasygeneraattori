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
  const [title, setTitle] = useState("My Songbook"); // Default title
  const [date, setDate] = useState(""); // Default empty date
  const [image, setImage] = useState<string | null>(null); // Store image as data URL

  return (
    <div className="flex h-screen">
      {/* Left side (50% width) */}
      <div className="w-1/2 flex flex-col p-4">
        <div className="flex">
          <div className="w-1/2 p-2">
            <SongList
              onSelectSong={setSelectedSong}
              onAddToSelected={(song) =>
                setSelectedSongs((prev) =>
                  prev.some((s) => s.id === song.id) ? prev : [...prev, song]
                )
              }
            />
          </div>
          <div className="w-1/2 p-2">
            <FrontpageInfo
              title={title}
              date={date}
              image={image}
              onChange={(newTitle, newDate, newImage) => {
                setTitle(newTitle);
                setDate(newDate);
                setImage(newImage);
              }}
            />
          </div>
        </div>

        <LyricsBox lyrics={selectedSong.lyrics} />
        <SelectedSongs
          selectedSongs={selectedSongs}
          onRemoveSong={(songId) =>
            setSelectedSongs((prev) => prev.filter((s) => s.id !== songId))
          }
        />
      </div>

      {/* Right side - SongBooklet (50% width) */}
      <div className="w-1/2 flex justify-center p-4">
        <SongBooklet
          selectedSongs={selectedSongs}
          title={title}
          date={date}
          image={image}
        />
      </div>
    </div>
  );
}
