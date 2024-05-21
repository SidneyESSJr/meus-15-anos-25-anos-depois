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
  
  textAlign: "center",
  [theme.breakpoints.down("xs")]: {
    columnGap: Root.gapS,
    padding: Root.gapM,
  },
}));

export default function DisplayFrame({ children }: { children?: ReactNode }) {
  return <DisplayFrameComponent>{children}</DisplayFrameComponent>;
}
