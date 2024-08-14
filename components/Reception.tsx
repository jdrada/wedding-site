import { script } from "@/app/fonts";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Engage from "@/public/engage.png";

const Reception = () => {
  return (
    <div className="w-full relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 15 }}
        transition={{ duration: 1 }}
        className={classNames([
          script.className,
          "text-4xl text-center md:text-8xl mt-10",
        ])}
      >
        Itinerario
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 15 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-4"
      >
        La ceremonia se llevara en Liquidambar, Santa Lucia.
      </motion.p>
      <div className="flex items-center">
        <button className="p-2 border border-black rounded-lg">RSVP</button>
        <button className="p-2 border border-black rounded-lg">Waze</button>
      </div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 object-cover w-full h-auto"
      >
        <Image src={Engage} alt="engagement" className="opacity-75"></Image>
      </motion.div>
    </div>
  );
};

export default Reception;
