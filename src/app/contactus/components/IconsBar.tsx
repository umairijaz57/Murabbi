'use client'
import React, { useRef, useEffect, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

type Props = {};

function IconsBar({}: Props) {
  const [isInView, setLIsInView] = useState(false);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLIsInView(true);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly md:gap-20 mb-8">
      <a href="http://facebook.com/murabbi.io" target="_blank">
        <div
          className={`w-24 h-24 rounded-full bg-blue-600 m-2 flex justify-center place-items-center  transform cursor-pointer shadow-md ${
            isInView ? 'animate-icons' : ''
          }`}
          ref={element}
        >
          <FaFacebookF className="text-[3rem] text-white" />
        </div>
      </a>
      <a href="https://www.instagram.com/murabbi.io/" target="_blank">
        <div
          className={`w-24 h-24 rounded-full bg-blue-600 m-2 flex justify-center place-items-center  transform cursor-pointer shadow-md ${
            isInView ? 'animate-icons' : ''
          }`}
          ref={element}
        >
          <AiFillInstagram className="text-[3rem] text-white" />
        </div>
      </a>
      <a href="https://www.linkedin.com/company/murabbi/" target="_blank">
        <div
          className={`w-24 h-24 rounded-full bg-blue-600 m-2 flex justify-center place-items-center  transform cursor-pointer shadow-md ${
            isInView ? 'animate-icons' : ''
          }`}
          ref={element}
        >
          <GrLinkedinOption className="text-[3rem] text-white" />
        </div>
      </a>
    </div>
  );
}

export default IconsBar;
