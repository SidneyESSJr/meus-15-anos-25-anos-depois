"use client";

import { Root } from "@/theme/globals";
import { Box, Container, Skeleton, styled } from "@mui/material";

const PlayerSkeletonComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  borderRadius: Root.gapS,
  border: "none",
  display: "grid",
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

export default function Loading() {
  return (
    <PlayerSkeletonComponent>
        <Skeleton variant="rectangular" height="150px" />
        <Skeleton variant="rectangular" height="305px" />
        <Skeleton variant="rectangular" height="150px" />
        <Skeleton variant="rectangular" height="150px" />
        <Skeleton variant="rectangular" height="150px" />
        <Skeleton variant="rectangular" height="150px" />
    </PlayerSkeletonComponent>
  );
}
