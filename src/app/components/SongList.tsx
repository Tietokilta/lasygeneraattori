"use client";

import Song from "./Song";

const songs = [
  "Hyvät ystävät",
  "Helan går",
  "Se kolmas vesilaulu",
  "Kaks kisälliä",
  "Paavi ja sulttaani",
  "Unkarin viini",
  "Mandariinimies",
  "Ken ompi fuksi",
  "Ikuisen teekkarin laulu",
];

const SongList = () => {
  return (
    <>
      <div className="border border-black w-80">
        {songs.map((song, index) => (
          <Song key={index} name={song} />
        ))}
      </div>
    </>
  );
};

export default SongList;
