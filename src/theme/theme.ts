import { createTheme, responsiveFontSizes } from "@mui/material";

import { Monsieur_La_Doulaise, Poiret_One, Satisfy } from "next/font/google";
import { Root } from "./globals";

const poiretOne = Poiret_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

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

export let theme = createTheme({
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
    fontFamily: poiretOne.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: monsieur.style.fontFamily,
      fontSize: "9rem",
      color: Root.textConstrast,
      lineHeight: 0.9,
    },
    h2: {
      fontFamily: satisfy.style.fontFamily,
      fontSize: "1.7rem",
      color: Root.textConstrast,
    },
    h3: {
      fontSize: "4rem",
    },
    h4: {
      fontSize: "2rem",
    },
    button: {
      fontWeight: "bold",
      letterSpacing: 1.4,
    },
  },
  breakpoints: {
    values: {
      xs: 550,
      sm: 730,
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
          marginBottom: Root.gapM,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: Root.insidePadding,
          ":last-child": {
            paddingBottom: Root.insidePadding,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md"],
  factor: 2,
  variants: ["h1", "h3", "h4", "h5", "h6", "subtitle1", "button"],
});
