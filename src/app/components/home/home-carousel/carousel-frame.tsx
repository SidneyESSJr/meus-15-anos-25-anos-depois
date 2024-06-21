"use client";

import { Root } from "@/theme/globals";
import { Container, styled } from "@mui/material";
import { ReactNode } from "react";

const CarouselFrameComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  borderRadius: Root.gapS,
  display: "block",
  border: "none",
  ["img"]: {
    width: "100%",
    height: "442px",
    borderRadius: Root.gapS,
  },
  [".swiper-pagination-bullet"]: {
    background: "#fff",
  },
  [".swiper-wrapper"]: {
    width: "320px",
  },
  [".swiper-3d"]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    padding: Root.insidePadding,
  },
}));

export default function CarouselFrame({ children }: { children?: ReactNode }) {
  return <CarouselFrameComponent>{children}</CarouselFrameComponent>;
}
