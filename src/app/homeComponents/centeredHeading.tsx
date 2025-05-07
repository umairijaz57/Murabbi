"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/onViewPort";

type Props = {
  text: string;
  offer?: boolean;
  events?: boolean;
};

function CenteredHeading(props: Props) {
  const [headingRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={headingRef}
      className={`flex mt-4 mb-2 text-center justify-center text-3xl md:text-4xl text-gray-900/90 font-extrabold transition duration-1000  ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      }`}
    >
      <div className="relative">
        <div className="absolute -top-8 left-0">
          <Image src="/Heading.png" alt="" width={200} height={150} />
        </div>
        {props.text}
      </div>
    </div>
  );
}

export default CenteredHeading;
