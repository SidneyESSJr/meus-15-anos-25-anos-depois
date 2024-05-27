"use client";

import { Box, Container, Skeleton, styled } from "@mui/material";

const PlayerSkeletonComponent = styled(
  Container,
  {}
)(({}) => ({
  height: "73px",
  width: "100%",
  display: "flex",
  gap: ".5rem",
  padding: ".5rem",
}));

export default function Loading() {
  return (
    <PlayerSkeletonComponent>
      <Box sx={{ width: "40%" }}>
        <Skeleton variant="text" height="50%" />
        <Skeleton variant="text" height="50%" />
      </Box>
      <Skeleton variant="rectangular" width="60%" height="100%" />
    </PlayerSkeletonComponent>
  );
}
