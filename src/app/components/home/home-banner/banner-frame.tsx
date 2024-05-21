"use client";

import { Root } from "@/theme/globals";
import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const BannerFrameComponent = styled(
  Box,
  {}
)(({ theme }) => ({
  padding: "5rem 2rem",
  background: `linear-gradient(${Root.backgroundColor})`,
  borderRadius: Root.gapS,
  border: "none",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: '3rem'
  }
}));

export default function BannerFrame({ children }: { children?: ReactNode }) {
  return <BannerFrameComponent>{children}</BannerFrameComponent>;
}
