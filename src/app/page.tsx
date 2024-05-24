import getMosaicImage, { MosaicI } from "@/actions/get-mosaic-image";
import getMusic, { Music } from "@/actions/get-music";
import Display from "./components/home/home-display/display";
import Mosaic from "./components/home/home-mosaic/mosaic";
import MusicPlayer from "./components/music-player/music-player";

export default async function Home() {
  const { fetchData: music } = await getMusic<Music>();
  const { fetchData: image } = await getMosaicImage<MosaicI>();

  return (
    <main>
      {!music.erro ? (
        <MusicPlayer data={music.data} />
      ) : (
        "Não foi possivel iniciar o player"
      )}
      {!image.erro ? (
        <Mosaic data={image.data} />
      ) : (
        "Não foi possivel carregar as imagens"
      )}
      <Display />
    </main>
  );
}
