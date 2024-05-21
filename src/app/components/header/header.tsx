import { Typography } from "@mui/material";
import NavButtonFrame from "../nav-button/nav-button-frame";
import HeaderFrame from "./header-frame";
import { Root } from "@/theme/globals";

export default function Header() {
  return (
    <HeaderFrame>
      <div style={{textAlign: "center"}}>
        <Typography variant="h2">Meus 15 anos</Typography>
        <Typography variant="h2">25 anos depois</Typography>
      </div>
      <nav style={{ display: "flex", columnGap: Root.gapM, justifyContent: "center"}}>
        <NavButtonFrame>Home</NavButtonFrame>
        <NavButtonFrame>Sobre min</NavButtonFrame>
        <NavButtonFrame>Presença</NavButtonFrame>
        <NavButtonFrame>Festa</NavButtonFrame>
      </nav>
    </HeaderFrame>
  );
}
