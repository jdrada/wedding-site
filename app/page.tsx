"use client";

import HomeIntroLogo from "@/components/HomeIntroLogo";
import Reception from "@/components/Reception";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <main
        className={cn([
          "flex flex-col w-full shadow max-w-screen-mobile mx-auto",
        ])}
      >
        <section id="home" className="h-screen flex w-full bg-black">
          <HomeIntroLogo />
        </section>
        <section className="flex w-full">
          <Reception />
        </section>
      </main>
    </>
  );
}
