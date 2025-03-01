type SongListItemProps = {
  name: string;
  onClick: () => void;
  onAdd: () => void;
};

const SongListItem = ({ name, onClick, onAdd }: SongListItemProps) => {
  return (
    <div className="border border-black p-2 flex justify-between items-center hover:bg-gray-400"
         onClick={onClick}
    >
      <span>{name}</span>
      <button onClick={onAdd} className="bg-blue-500 text-white px-2 py-1 rounded">
        Add
      </button>
    </div>
  );
};

export default SongListItem;


