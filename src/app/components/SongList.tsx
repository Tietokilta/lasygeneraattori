"use client";

import { songs } from "../dummydata";
import Song from "./Song";

const SongList = () => {
  return (
    <>
      <div className="border border-black w-80">
        {songs.map((song) => (
          <Song key={song.id} name={song.title} />
        ))}
      </div>
    </>
  );
};

export default SongList;
