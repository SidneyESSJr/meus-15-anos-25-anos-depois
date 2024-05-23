"use client";

import getMusics, { Music } from "@/actions/getMusic";
import { Root } from "@/theme/globals";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, Container, IconButton, Slider, Typography } from "@mui/material";
import { useRef, useState } from "react";
import MusicPlayerFrame from "./music-player-frame";

export default function MusicPlayer({ data }: { data: Music[] }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(true);
  const [music, setMusic] = useState(data[0]);

  function playAudio() {
    if (play) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
    getMusics();
    setPlay(!play);
    console.log(data);
  }

  return (
    <Container component="section">
      <audio ref={ref}>
        <source src={music.url}></source>
      </audio>
      <MusicPlayerFrame>
        <Box sx={{ paddingInline: Root.gapM }}>
          <Typography component="h5" variant="h5">
            Título da Música
          </Typography>
          <Typography variant="subtitle1">Nome do Cantor</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="anterior">
            <SkipPreviousIcon />
          </IconButton>

          <Slider />
          <IconButton aria-label="proxima" >
            <SkipNextIcon />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={playAudio}>
            {play ? (
              <PlayArrowIcon height={38} width={38} />
            ) : (
              <PauseIcon height={38} width={38} />
            )}
          </IconButton>
          <IconButton aria-label="próximo"></IconButton>
        </Box>
      </MusicPlayerFrame>
    </Container>
  );
}
