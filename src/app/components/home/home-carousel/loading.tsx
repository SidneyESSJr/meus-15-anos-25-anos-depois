"use client";

import { Root } from "@/theme/globals";
import { Container, Skeleton, styled } from "@mui/material";

const PlayerSkeletonComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  borderRadius: Root.gapS,
  border: "none",
  display: "flex",
  gap: Root.gapS,
  "&>*": {
    height: "100%",
    width: "35%",
    borderRadius: Root.gapS,
  },
  "&>*:nth-child(3)": {
    width: "30%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    padding: Root.insidePadding,
  },
}));

export default function Loading() {
  return (
    <PlayerSkeletonComponent>
      <Skeleton variant="rectangular" height="470px" />
      <Skeleton variant="rectangular" height="470px" />
      <Skeleton variant="rectangular" height="470px" />
    </PlayerSkeletonComponent>
  );
}
