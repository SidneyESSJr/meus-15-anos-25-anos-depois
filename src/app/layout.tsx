import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Meus 15 anos 25 anos depois",
  description: "Festa de aniversário de Renoá Mauer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
