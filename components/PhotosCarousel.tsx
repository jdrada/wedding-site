import * as React from "react";
import Image from "next/image";

export function PhotoCarousel() {
  const imgarr = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
  ];

  return (
    <div className="w-full  border h-[60dvh]  overflow-scroll rounded-lg">
      {imgarr.map((img, index) => (
        <div key={index} className="relative w-full h-96 border-b border-white">
          <Image
            key={index}
            src={`/images/${img}`}
            alt="engagement"
            fill
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`/images/blur.jpg`}
            sizes="100"
          ></Image>
        </div>
      ))}
    </div>
  );
}
