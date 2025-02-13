import Header from "./components/Header";
import LyricsBox from "./components/LyricsBox";
import SongList from "./components/SongList";

export default function Home() {
  return (
    <div>
      <Header />
      <SongList />
      <LyricsBox />
    </div>
  );
}
