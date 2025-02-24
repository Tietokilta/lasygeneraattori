type LyricsBoxProps = {
  lyrics: string;
};

const LyricsBox = ({ lyrics }: LyricsBoxProps) => {
  return (
    <div className="border border-black w-80 h-80 p-4 overflow-auto">
      {lyrics}
    </div>
  );
};

export default LyricsBox;
