import { Box, Typography } from "@mui/material";
import Link from "next/link";
import NavButtonFrame from "../../nav-button/nav-button-frame";
import NavContentFrame from "../../nav-button/nav-content-frame";
import HeaderFrame from "./header-frame";

export default function Header() {
  return (
    <HeaderFrame>
      <Box sx={{ margin: "auto", padding: "1rem" }}>
        <Typography variant="h2">Meus 15 anos</Typography>
        <Typography variant="h2">25 anos depois</Typography>
      </Box>

      <NavContentFrame>
        <NavButtonFrame>
          <Link href={"/"}>
            <Typography variant="button">Home</Typography>
          </Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={"/sobre"}>
            <Typography variant="button">Sobre min</Typography>
          </Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={"/presenca"}>
            <Typography variant="button">Presença</Typography>
          </Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={"/festa"}>
            <Typography variant="button">Festa</Typography>
          </Link>
        </NavButtonFrame>
      </NavContentFrame>
    </HeaderFrame>
  );
}
