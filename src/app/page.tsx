import getMusic, { Music } from "@/actions/get-music";
import Banner from "./components/home/home-banner/banner";
import Display from "./components/home/home-display/display";
import MusicPlayer from "./components/music-player/music-player";

export default async function Home() {
  const { fetchData } = await getMusic<Music>();

  console.log(fetchData.erro)

  return (
    <main>
      {!fetchData.erro ? (
        <MusicPlayer data={fetchData.data} />
      ) : (
        "Não foi possivel iniciar o player"
      )}
      <Banner />
      <Display />
    </main>
  );
}
