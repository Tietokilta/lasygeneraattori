"use client";

import { songs } from "../dummydata";
import { SongData } from "../types";
import Song from "./Song";

type SongListProps = {
  onSelectSong: (song: SongData) => void;
  onAddToSelected: (song: SongData) => void;
};

const SongList = ({ onSelectSong, onAddToSelected }: SongListProps) => {
  return (
    <div className="border border-black w-80 p-2">
      {songs.map((song) => (
        <Song 
          key={song.id} 
          name={song.title} 
          onClick={() => onSelectSong(song)} 
          onAdd={() => onAddToSelected(song)} 
        />
      ))}
    </div>
  );
};

export default SongList;
