import { SongData } from "../types";

type SelectedSongsProps = {
  selectedSongs: SongData[];
  onRemoveSong: (songId: number) => void;
};

const SelectedSongs = ({ selectedSongs, onRemoveSong }: SelectedSongsProps) => {
  return (
    <div className="border border-black w-80 h-80 m-2 overflow-auto">
      <h2 className="font-bold">Selected Songs</h2>
      {selectedSongs.length === 0 ? (
        <p className="text-gray-500">No songs selected</p>
      ) : (
        selectedSongs.map((song) => (
          <div key={song.id} className="flex justify-between items-center p-1 border-b">
            <span>{song.title}</span>
            <button 
              onClick={() => onRemoveSong(song.id)} 
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedSongs;

