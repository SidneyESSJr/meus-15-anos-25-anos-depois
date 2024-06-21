"use client";

import { Root } from "@/theme/globals";
import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const SliderFrameComponent = styled(
  Box,
  {}
)(({ theme }) => ({
  background: `linear-gradient(${Root.backgroundColor})`,
  padding: Root.gapM,
  borderRadius: Root.gapS,
}));

export default function SliderFrame({ children }: { children?: ReactNode }) {
  return <SliderFrameComponent>{children}</SliderFrameComponent>;
}
