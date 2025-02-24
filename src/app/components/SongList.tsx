"use client";

import { songs } from "../dummydata";
import { SongData } from "../types";
import SongListItem from "./SongListItem";

type SongListProps = {
  onSelectSong: (song: SongData) => void;
  onAddToSelected: (song: SongData) => void;
};

const SongList = ({ onSelectSong, onAddToSelected }: SongListProps) => {
  return (
    <div className="border border-black w-80 m-2">
      {songs.map((song) => (
        <SongListItem 
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
