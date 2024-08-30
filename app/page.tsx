"use client";

import HomeIntroLogo from "@/components/HomeIntroLogo";
import Reception from "@/components/Reception";
import { cn } from "@/lib/utils";

export default function Home() {
  const scrollToNextSection = () => {
    const guideSection = document.getElementById("guide");
    if (guideSection) {
      guideSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <main
        className={cn([
          "flex flex-col w-full shadow max-w-screen-mobile mx-auto",
        ])}
      >
        <section id="home" className="h-screen flex w-full bg-black">
          <HomeIntroLogo scrollToNextSection={scrollToNextSection} />
        </section>
        <section id="guide" className="flex w-full">
          <Reception />
        </section>
      </main>
    </>
  );
}
