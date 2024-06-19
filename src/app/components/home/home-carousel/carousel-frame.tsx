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
  height: "486px",
  ["img"]: {
    width: "350px",
    height: "470px",
    borderRadius: Root.gapS,
  },
  [".splide__list"]: {
    display: "flex",
    columnGap: Root.gapS,
    margin: "auto",
  },
  [".splide__slide"]: {
    width: "350px !important",
  },
  [".splide__pagination"]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    padding: Root.insidePadding,
  },
}));

export default function CarouselFrame({ children }: { children?: ReactNode }) {
  return <CarouselFrameComponent>{children}</CarouselFrameComponent>;
}
