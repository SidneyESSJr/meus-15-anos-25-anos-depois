import { createTheme } from "@mui/material";

import { Satisfy, Monsieur_La_Doulaise } from "next/font/google";
import { Root } from "./globals";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#780000",
      contrastText: "#fdf0d5",
    },
    secondary: {
      main: "#c1121f",
      contrastText: "#fdf0d5",
    },
  },
  typography: {
    h2: {
      fontFamily: satisfy.style.fontFamily,
      fontSize: "1.7rem",
      color: Root.textConstrast,
    },
    h1: {
      fontFamily: monsieur.style.fontFamily,
      fontSize: "9rem",
      color: Root.textConstrast,
      lineHeight: 0.9
      
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: Root.insidePadding,
          background: `linear-gradient(${Root.backgroundColor})`,
          borderRadius: Root.gapS,
          border: "none",
          display: "grid",
          marginBottom: Root.gapM
        },
      },
    },
  },
});
