"use client";

import { Root } from "@/theme/globals";
import { Container, styled } from "@mui/material";
import { ReactNode } from "react";

const HeaderFrameComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  padding: Root.insidePadding,
  background: `linear-gradient(${Root.backgroundColor})`,
  borderRadius: Root.gapS,
  border: "none",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export default function HeaderFrame({ children }: { children?: ReactNode }) {
  return <HeaderFrameComponent>{children}</HeaderFrameComponent>;
}
