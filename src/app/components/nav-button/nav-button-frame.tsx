"use client";

import { Root } from "@/theme/globals";
import { Button, styled } from "@mui/material";
import { ReactNode } from "react";

const NavButtonFrameComponent = styled(
  Button,
  {}
)(({}) => ({
  background: `linear-gradient(${Root.backgroundColor})`,
  color: Root.textConstrast,
  padding: Root.insidePadding,
  marginBlock: "auto",
  "&:hover": { backgroundColor: Root.primaryColor },
  minWidth: "93px",
  height: "55px",
}));

export default function NavButtonFrame({ children }: { children?: ReactNode }) {
  return <NavButtonFrameComponent>{children}</NavButtonFrameComponent>;
}
