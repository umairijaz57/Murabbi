"use client";
import Image from "next/image";
import React from "react";
import useIntersectionObserver from "../../hooks/onViewPort";

type Props = {
  text: string;
};

function Heading({ text }: Props) {
  const [headingRef, isVisible] = useIntersectionObserver();
  
  return (
    <div   ref={headingRef} className={`flex text-center text-gray-900/90 ml-2 md:ml-8    justify-start text-3xl md:text-4xl font-extrabold transition duration-1000  ${
      isVisible ?"translate-y-0 opacity-100" : "translate-y-40 opacity-0"
    }`}>
      <div className="relative">
        <div className="absolute -top-8 left-0">
          <Image src="/Heading.png" alt="" width={200} height={150} /> 
        </div>
        {text}
      </div>
    </div>
  );
}

export default Heading;
