import { Root } from "@/theme/globals";
import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const DisplayCounterFrameComponent = styled(
  Box,
  {}
)(({ theme }) => ({
  padding: ` ${Root.gapXl} ${Root.insidePadding}`,
  background: `linear-gradient(${Root.backgroundColor})`,
  borderRadius: Root.gapS,
  border: "none",
  display: "grid",
  gridTemplateRows: "2fr 1fr",
  alignItems: "center",
  color: Root.textConstrast,
}));

export default function DisplayCounterFrame({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <DisplayCounterFrameComponent>{children}</DisplayCounterFrameComponent>
  );
}
