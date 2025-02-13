type SongProps = {
  name: string;
};

const Song = ({ name }: SongProps) => {
  return <div className="border border-black">{name}</div>;
};

export default Song;
