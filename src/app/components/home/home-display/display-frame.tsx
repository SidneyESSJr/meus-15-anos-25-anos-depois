"use client";

import { Root } from "@/theme/globals";
import { Container, styled } from "@mui/material";
import { ReactNode } from "react";
import { Poiret_One} from "next/font/google";

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
  padding: Root.gapXl,
  fontFamily: poiretOne.style.fontFamily,
  fontSize: '6rem',
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    fontSize: '6rem',
    rowGap: Root.gapS
  },
}));

export default function DisplayFrame({ children }: { children?: ReactNode }) {
  return <DisplayFrameComponent>{children}</DisplayFrameComponent>;
}
