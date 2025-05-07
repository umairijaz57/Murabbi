"use client";
import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/onViewPort";

type Props = { text: string; center?: boolean };

const Description = (props: Props) => {
  const [element, isInView] = useIntersectionObserver();

  return (
    <div
      ref={element}
      className={`${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
      } ${
        props.center ? "text-center" : "text-left "
      } transition  duration-1000 text-gray-600  md:ml-8 text-lg p-0 px-4 `}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
};

export default Description;

