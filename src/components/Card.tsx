import Image from "next/image";
import React from "react";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-200 hover:scale-105 text-center">
      <div className="relative w-full h-48">
        <Image src={imgSrc} alt={venueName} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{venueName}</h3>
      </div>
    </div>
  );
}
