"use client";

import { Root } from "@/theme/globals";
import { Button, styled } from "@mui/material";
import { ReactNode } from "react";

const NavButtonFrameComponent = styled(
  Button,
  {}
)(({}) => ({
  background: Root.secondaryColor,
  color: Root.textConstrast,
  padding: Root.insidePadding,
  "&:hover": { backgroundColor: Root.primaryColor },
  width: "95px",
}));

export default function NavButtonFrame({ children }: { children?: ReactNode }) {
  return <NavButtonFrameComponent>{children}</NavButtonFrameComponent>;
}
