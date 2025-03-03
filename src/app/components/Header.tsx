type HeaderProps = {
  onSelect: (m: "meta" | "songs" | "memes") => void;
};

const Header = ({ onSelect }: HeaderProps) => {
  return (
    <div className="bg-slate-700 w-full h-20 flex items-center justify-center space-x-8 shadow-lg">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => onSelect("meta")}
      >
        Meta
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => onSelect("songs")}
      >
        Songs
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        onClick={() => onSelect("memes")}
      >
        Memes
      </button>
    </div>
  );
};

export default Header;
