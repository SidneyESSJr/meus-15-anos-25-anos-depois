"use client";

import { Container, Typography } from "@mui/material";
import React from "react";
import BannerFrame from "./banner-frame";
import { theme } from "@/theme/theme";

export default function Banner() {
  return (
    <Container sx={{ padding: "2rem" }}>
      <BannerFrame>
        <Typography
          variant="h1"
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "7rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "5rem",
            },
          }}
        >
          Meus 15 anos
        </Typography>

        <Typography
          variant="h1"
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "7rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "5rem",
            },
          }}
        >
          25 anos depois
        </Typography>
      </BannerFrame>
    </Container>
  );
}
