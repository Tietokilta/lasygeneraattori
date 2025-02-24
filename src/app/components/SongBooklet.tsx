"use client";

import { SongData } from "../types";


type SongBookletProps = {
  selectedSongs: SongData[];
};

const SongBooklet = ({ selectedSongs }: SongBookletProps) => {
  return (
    <div className="border border-black m-2 flex items-center justify-center bg-white shadow-lg 
                    w-[700px] h-[900px] p-4 overflow-y-auto">
      <div className="text-center">
        {selectedSongs.length > 0 ? (
          selectedSongs.map((song, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-bold text-lg">{song.title}</h2>
              <p className="whitespace-pre-wrap text-sm">{song.lyrics}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No songs selected</p>
        )}
      </div>
    </div>
  );
};

export default SongBooklet;
