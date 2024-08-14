import type { Metadata } from "next";

import "./globals.css";

import { unna } from "./fonts";

export const metadata: Metadata = {
  title: "C & JC",
  description: "Wedding website for Carolina and Juan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={unna.className}>{children}</body>
    </html>
  );
}
