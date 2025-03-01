import { SongData } from "../types";

type LyricsBoxProps = {
  song: SongData
};

const LyricsBox = ({ song }: LyricsBoxProps) => {
  console.log(song.lyrics);
  return (
    <div className="border border-black w-80 h-80 m-2 overflow-auto">
      <h3 className="font-bold">{song.title}</h3>
      <div className="whitespace-pre-wrap">{song.lyrics}</div>
    </div>
  );
};

export default LyricsBox;
