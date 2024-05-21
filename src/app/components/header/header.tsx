import { Box, Typography } from "@mui/material";
import NavButtonFrame from "../nav-button/nav-button-frame";
import HeaderFrame from "./header-frame";
import { Root } from "@/theme/globals";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderFrame>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Meus 15 anos</Typography>
        <Typography variant="h2">25 anos depois</Typography>
      </Box>
      <Box
        component={"nav"}
        sx={{
          display: "flex",
          columnGap: Root.gapM,
          justifyContent: "center",
        }}
      >
        <NavButtonFrame>
          <Link href={""}>Home</Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={""}>Sobre min</Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={""}>Presença</Link>
        </NavButtonFrame>
        <NavButtonFrame>
          <Link href={""}>Festa</Link>
        </NavButtonFrame>
      </Box>
    </HeaderFrame>
  );
}
