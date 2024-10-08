"use client";
import { script, unna } from "@/app/fonts";
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import CandJC from "@/public/hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import DownArrow from "./icons/DownArrow";
import { cn } from "@/lib/utils";

const HomeIntroLogo = ({
  scrollToNextSection,
}: {
  scrollToNextSection: () => void;
}) => {
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={backgroundRef}
      className="flex flex-col relative w-full h-full overflow-hidden"
    >
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="justify-center mt-28 max-w-screen-xl w-full"
      >
        <motion.h1
          // initial={{ opacity: 0, y: 15 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.75 }}
          className={cn([
            script.className,
            "text-white text-6xl text-center md:text-6xl",
          ])}
        >
          Carolina + <br />
          Juan Carlos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn([
            "text-white text-center my-8 relative z-10 text-lg",
            unna.className,
          ])}
        >
          BODA CIVIL | 26.10.2024
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="text-white text-center mt-4 relative z-10"
        >
          <div className="mt-4 w-full flex items-center justify-center z-30">
            <button
              onClick={scrollToNextSection}
              title="scroll down"
              type="button"
              className="backdrop-blur-sm text-white border border-white animate-bounce p-1 rounded-full"
            >
              <DownArrow />
            </button>
          </div>
        </motion.div>
      </motion.div>
      =
      <Image
        priority
        src={CandJC}
        alt="caro&juan"
        className="object-cover bottom-0 absolute w-full h-auto z-20"

        // className="object-cover bottom-0 absolute w-full h-auto z-20"
      ></Image>
    </motion.div>
  );
};

export default HomeIntroLogo;
``;
