"use client";

import { Container, Typography } from "@mui/material";
import React from "react";
import BannerFrame from "./banner-frame";
import { theme } from "@/theme/theme";

export default function Banner() {
  return (
    <Container sx={{ padding: "2rem",   [theme.breakpoints.down("xs")]: {
      padding: '.75rem'
    }}}>
      <BannerFrame>
        <Typography variant="h1">Meus 15 anos</Typography>

        <Typography variant="h1">25 anos depois</Typography>
      </BannerFrame>
    </Container>
  );
}
