"use client";

import getMosaicImage, { CorouselI } from "@/actions/get-corousel-image";
import getMusic, { Music } from "@/actions/get-music";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Mosaic from "./components/home/home-carousel/carousel";
import Display from "./components/home/home-display/display";
import MapLocation from "./components/location/map-location";
import MusicPlayer from "./components/music-player/music-player";
import Error from "./error";

export default function Home() {
  const [music, setMusic] = useState<Music[]>();
  const [image, setImage] = useState<CorouselI[]>();

  async function fetchMusic() {
    const result = await getMusic();
    setMusic(result);
  }

  async function fetchImage() {
    const result = await getMosaicImage();
    setImage(result);
  }

  useEffect(() => {
    fetchImage();
    fetchMusic();
  }, []);

  return (
    <main>
      <ErrorBoundary FallbackComponent={Error}>
        {music && <MusicPlayer data={music} />}
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Error}>
        {image && <Mosaic data={image} />}
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Error}>
        <Display />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Error}>
        <MapLocation />
      </ErrorBoundary>
    </main>
  );
}
