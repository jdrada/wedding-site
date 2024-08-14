"use client";

import classNames from "classnames";

import { script, unna } from "./fonts";
import CandJC from "@/public/cyjc1.png";
import Image from "next/image";
import HomeIntroLogo from "@/components/HomeIntroLogo";
import Reception from "@/components/Reception";

export default function Home() {
  return (
    <>
      <main
        className={classNames([
          unna.className,
          "flex flex-col w-full shadow relative",
        ])}
      >
        <section id="home" className="h-screen flex w-full bg-dark">
          <HomeIntroLogo />
        </section>
        {/* <section className="flex w-full h-screen bg-light">
          <Reception />
        </section> */}
      </main>
    </>
  );
}
