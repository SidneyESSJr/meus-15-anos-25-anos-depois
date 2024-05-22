"use client";

import { Root } from "@/theme/globals";
import { theme } from "@/theme/theme";
import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const NavContentFrameComponent = styled(
  Box,
  {}
)(({}) => ({
  display: "flex",
  columnGap: Root.gapM,
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    rowGap: Root.gapS,
    padding: Root.gapM,
  },
}));

export default function NavContentFrame({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <NavContentFrameComponent component={"nav"}>
      {children}
    </NavContentFrameComponent>
  );
}
