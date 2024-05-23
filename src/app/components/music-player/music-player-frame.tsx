"use client";

import { Card, CardContent, styled } from "@mui/material";
import { Root } from "@/theme/globals";
import { theme } from "@/theme/theme";
import { ReactNode } from "react";

const MusicPlayerFrameComponent = styled(
  Card,
  {}
)(({}) => ({
  display: "flex",
  boxShadow: "none",
  background: `linear-gradient(${Root.backgroundColor})`,
}));

const CardContentFrameComponent = styled(
  CardContent,
  {}
)(({}) => ({
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
  width: "100%",
  color: Root.textConstrast,
  paddingBottom: 0,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "3fr 3fr",
  },
}));

export default function MusicPlayerFrame({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MusicPlayerFrameComponent>
      <CardContentFrameComponent>{children}</CardContentFrameComponent>
    </MusicPlayerFrameComponent>
  );
}
