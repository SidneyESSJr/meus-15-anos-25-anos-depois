"use client";

import { Music } from "@/actions/get-music";
import { Root } from "@/theme/globals";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, Container, IconButton, Slider, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MusicPlayerFrame from "./music-player-frame";
import { formatDurationDisplay } from "../util/format-duration-display";
import { theme } from "@/theme/theme";

export default function MusicPlayer({ data }: { data: Music[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentSound, setCurrentSound] = useState(data[index]);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  function togglePlayPause() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  function toggleMute() {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.muted = false;
      setMuted(false);
    } else {
      audioRef.current.muted = true;
      setMuted(true);
    }
  }

  function handleCurrentProgress(event: Event, newValue: number | number[]) {
    if (!audioRef.current) return;
    audioRef.current.currentTime = newValue as number;
  }

  function handleVolume(event: Event, newValue: number | number[]) {
    if (!audioRef.current) return;
    if (newValue === 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
    audioRef.current.volume = newValue as number;
  }

  function handleNext() {
    if (!audioRef.current) return;
    let i = index;
    if (data.length - 1 < i + 1) {
      i = 0;
    } else {
      i += 1;
    }
    setIndex(i);
  }

  function handlePrev() {
    let i = index;
    if (i - 1 < 0) {
      i = data.length - 1;
    } else {
      i -= 1;
      setIndex(i);
    }
  }

  useEffect(() => {
    if (!audioRef.current) return;
    setCurrentSound(data[index]);
    audioRef.current.src = currentSound.url;
    audioRef.current.play();
  }, [currentSound.url, index]);

  return (
    <Container component="section">
      <audio
        autoPlay={true}
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
          setIsReady(true);
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNext}
        onTimeUpdate={(e) => setCurrentProgress(e.currentTarget.currentTime)}
        onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        muted={muted}
      >
        <source type="audio/mpeg" src={currentSound.url}></source>
      </audio>
      <MusicPlayerFrame>
        <Box
          sx={{
            paddingInline: Root.gapM,
            [theme.breakpoints.down("sm")]: {
              borderBottom: `1px solid ${Root.textConstrast}`,
              marginBottom: "10px",
              paddingBottom: "5px",
            },
          }}
        >
          <Typography variant="subtitle1">{currentSound.nome}</Typography>
          <Typography variant="subtitle2">{currentSound.artista}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="anterior" onClick={handlePrev}>
            <SkipPreviousIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Slider
              value={currentProgress}
              onChange={handleCurrentProgress}
              max={duration}
              min={0}
              step={0.1}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <small>{formatDurationDisplay(currentProgress)}</small>
              <small>{formatDurationDisplay(duration)}</small>
            </Box>
          </Box>
          <IconButton aria-label="proxima" onClick={handleNext}>
            <SkipNextIcon />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={togglePlayPause}>
            {!isPlaying ? (
              <PlayArrowIcon height={38} width={38} />
            ) : (
              <PauseIcon height={38} width={38} />
            )}
          </IconButton>
          <Slider
            sx={{ height: "65%" }}
            orientation="vertical"
            onChange={handleVolume}
            max={1}
            min={0}
            step={0.1}
            value={volume}
          />
          <IconButton aria-label="mute/unmte" onClick={toggleMute}>
            {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Box>
      </MusicPlayerFrame>
    </Container>
  );
}
