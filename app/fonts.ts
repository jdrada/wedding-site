import { Gloock, Pinyon_Script, Unna } from "next/font/google";
import localFont from "next/font/local";

export const inter = Gloock({ weight: "400", subsets: ["latin"] });
export const pinyon = Pinyon_Script({ weight: "400", subsets: ["latin"] });
export const unna = Unna({ weight: ["400", "700"], subsets: ["latin"] });
export const script = localFont({
  src: "./script.otf",
  display: "auto",
});
