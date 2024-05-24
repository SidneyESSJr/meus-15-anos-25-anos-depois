"use client";

import { Root } from "@/theme/globals";
import { Container, styled } from "@mui/material";
import { ReactNode } from "react";

const MosaicFrameComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  // background: `linear-gradient(${Root.backgroundColor})`,
  borderRadius: Root.gapS,
  border: "none",
  display: "grid",
  gridArea: "1/1",
  padding: Root.gapXl,
  gap: Root.gapS,
  "&>*": {
    height: "100%",
    width: "100%",
    borderRadius: Root.gapS,
  },
  "&>*:nth-child(2)": {
    gridColumn: "2/4",
    gridRow: "span 2",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    padding: Root.insidePadding,
  },
}));

export default function MosaicFrame({ children }: { children?: ReactNode }) {
  return <MosaicFrameComponent>{children}</MosaicFrameComponent>;
}
