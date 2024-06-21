import { Root } from "@/theme/globals";
import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const LocationFrameComponent = styled(
  Box,
  {}
)(({ theme }) => ({
  columnGap: Root.gapM,
  borderRadius: Root.gapS,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "316px",
  background: `linear-gradient(${Root.backgroundColor})`,
  [".leaflet-container"]: {
    height: "300px",
    width: "95%",
  },
  [".leaflet-popup-content a"]: {
    display: "flex",
    color: "#000",
    gap: Root.gapL,
    alignItems: "center",
    justifyContent: "center",
    ["img"]: {
      height: "100px",
      width: "100px",
    }
  },
}));

export default function LocationFrame({ children }: { children: ReactNode }) {
  return <LocationFrameComponent>{children}</LocationFrameComponent>;
}
