"use client";

import { Root } from "@/theme/globals";
import { Container, styled } from "@mui/material";
import { Poiret_One } from "next/font/google";
import { ReactNode } from "react";

const poiretOne = Poiret_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

const DisplayFrameComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  columnGap: Root.gapM,

  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    columnGap: Root.gapS,
    padding: Root.insidePadding,
  },
}));

export default function DisplayFrame({ children }: { children?: ReactNode }) {
  return <DisplayFrameComponent>{children}</DisplayFrameComponent>;
}
