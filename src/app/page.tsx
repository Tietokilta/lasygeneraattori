"use client";
import { useState } from "react";
import LyricsBox from "./components/LyricsBox";
import SongList from "./components/SongList";
import SelectedSongs from "./components/SelectedSongs";
import { songs } from "./dummydata";
import { SongData } from "./types";
import SongBooklet from "./components/SongBooklet";
import FrontpageInfo from "./components/FrontpageInfo";
import Header from "./components/Header";

export default function Home() {
  const [selectedSong, setSelectedSong] = useState(songs[0]); // Default song
  const [selectedSongs, setSelectedSongs] = useState<SongData[]>([]);
  const [title, setTitle] = useState("My Songbook"); // Default title
  const [date, setDate] = useState(""); // Default empty date
  const [image, setImage] = useState<string | null>(null); // Store image as data URL
  const [includeTOC, setIncludeToc] = useState<boolean>(false);

  // State for tracking selected section (Meta, Songs, Memes)
  const [selectedSection, setSelectedSection] = useState<
    "meta" | "songs" | "memes"
  >("meta");

  return (
    <div className="flex h-screen">
      {/* Left side (50% width) */}
      <div className="w-1/2 flex flex-col border border-black">
        <Header onSelect={setSelectedSection} />

        <div className="p-4">
          {selectedSection === "meta" && (
            <FrontpageInfo
              title={title}
              date={date}
              image={image}
              includeTOC={includeTOC}
              onChange={(newTitle, newDate, newImage, newIncludeToc) => {
                setTitle(newTitle);
                setDate(newDate);
                setImage(newImage);
                setIncludeToc(newIncludeToc);
              }}
            />
          )}

          {selectedSection === "songs" && (
            <div>
              <SongList
                onSelectSong={setSelectedSong}
                onAddToSelected={(song) =>
                  setSelectedSongs((prev) =>
                    prev.some((s) => s.id === song.id) ? prev : [...prev, song]
                  )
                }
              />
              <LyricsBox song={selectedSong} />
              <SelectedSongs
                selectedSongs={selectedSongs}
                onRemoveSong={(songId) =>
                  setSelectedSongs((prev) =>
                    prev.filter((s) => s.id !== songId)
                  )
                }
              />
            </div>
          )}

          {selectedSection === "memes" && (
            <div className="text-center text-xl">Memes Section</div>
          )}
        </div>
      </div>

      {/* Right side - SongBooklet (50% width) */}
      <div className="w-1/2 flex justify-center p-4 border border-black overflow-auto">
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
