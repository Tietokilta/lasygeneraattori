type SongProps = {
  name: string;
  onClick: () => void;
  onAdd: () => void;
};

const Song = ({ name, onClick, onAdd }: SongProps) => {
  return (
    <div className="border border-black p-2 flex justify-between items-center">
      <span onClick={onClick} className="cursor-pointer">{name}</span>
      <button onClick={onAdd} className="bg-blue-500 text-white px-2 py-1 rounded">
        Add
      </button>
    </div>
  );
};

export default Song;


