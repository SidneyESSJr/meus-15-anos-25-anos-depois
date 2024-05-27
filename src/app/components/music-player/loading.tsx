"use client";

import { Box, Container, Skeleton, styled } from "@mui/material";

const PlayerSkeletonComponent = styled(
  Container,
  {}
)(({ theme }) => ({
  height: "73px",
  width: "100%",
  display: "flex",
  gap: ".5rem",
  padding: ".5rem",
  "&>*:nth-child(1)": {
    width: "40%",
  },
  "&>*:nth-child(2)": {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "133px",
    "&>*:nth-child(1)": {
      width: "80%",
    },
    "&>*:nth-child(2)": {
      width: "100%",
    },
  },
}));

export default function Loading() {
  return (
    <PlayerSkeletonComponent>
      <Box>
        <Skeleton variant="text" height="50%" />
        <Skeleton variant="text" height="50%" />
      </Box>
      <Skeleton variant="rectangular" height="100%" />
    </PlayerSkeletonComponent>
  );
}
