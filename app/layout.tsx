import type { Metadata } from "next";

import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { unna } from "./fonts";
import classNames from "classnames";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Boda Carolina y Juan",
  description: "¡Nos casamos 💍! Carolina y Juan Carlos",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      /> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
