import { Box, Typography } from "@mui/material";
import NavButtonFrame from "../nav-button/nav-button-frame";
import HeaderFrame from "./header-frame";
import { Root } from "@/theme/globals";
import Link from "next/link";
import Image from "next/image";
import NavContentFrame from "../nav-button/nav-content-frame";

export default function Header() {
  return (
    <HeaderFrame>

      <Box sx={{ margin: "auto", padding: "1rem" }}>
        <Typography variant="h2">Meus 15 anos</Typography>
        <Typography variant="h2">25 anos depois</Typography>
      </Box>

      <NavContentFrame>
        <NavButtonFrame>
          <Link href={""}>
            <Typography variant="button">Home</Typography>
          </Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={""}>
            <Typography variant="button">Sobre min</Typography>
          </Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={""}>
            <Typography variant="button">Presença</Typography>
          </Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={""}>
            <Typography variant="button">Festa</Typography>
          </Link>
        </NavButtonFrame>
      </NavContentFrame>
    </HeaderFrame>
  );
}
