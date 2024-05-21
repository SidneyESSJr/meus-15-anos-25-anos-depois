import { createTheme } from "@mui/material";

import { Satisfy } from "next/font/google";
import { Root } from "./globals";

const satisfy = Satisfy({
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
      fontSize: "1.5rem",
      color: Root.textConstrast,
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
});
