"use client";

import { Container, styled } from "@mui/material";
import { ReactNode } from "react";

const HeaderFrameComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    padding: 0,
  },
}));

export default function HeaderFrame({ children }: { children?: ReactNode }) {
  return <HeaderFrameComponent>{children}</HeaderFrameComponent>;
}
