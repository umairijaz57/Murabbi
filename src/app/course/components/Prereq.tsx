"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdCheck } from "react-icons/md";

type Props = { prereq: string[] };

function Prereq(props: Props) {
  const [isLInView, setLIsInView] = useState(false);
  const left = useRef<HTMLDivElement>(null);

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
      threshold: 0.2, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (left.current) {
      observer.observe(left.current);
    }

    return () => {
      if (left.current) {
        observer.unobserve(left.current);
      }
    };
  }, []);

  // const [isInView, setIsInView] = useState(false);
  // const iconsRef = useRef<HTMLDivElement>(null);

  // const handleIconAnimation = () => {
  //   if (iconsRef.current) {
  //     iconsRef.current.classList.add("animate-icons");
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (iconsRef.current) {
  //       const { top } = iconsRef.current.getBoundingClientRect();
  //       setIsInView(top < window.innerHeight);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="overflow-hidden">
      <div
      ref={left}
        className={`flex flex-col-reverse items-center lg:flex-row lg:justify-between gap-4 md:gap-0 pt-2 transition duration-500 ${
          isLInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }   `}
      >
        <div className="lg:text-left lg:max-w-[70%]  grid gap-5">
          <div className="flex  text-left flex-col gap-4 items-start lg:ml-24 justify-start mx-auto   px-4 pt-2 lg:pt-6">
            {props.prereq.map((item, index) => (
              <div className="flex items-start p-2 gap-4">
                <div className="w-4 flex justify-center place-items-center h-4 bg-blue-600 rounded-full mt-1 ">
                  <MdCheck className="w-7 h-7  text-white" />
                </div>
                <span className="text-justify text-base">{item}</span>
              </div>
            ))}

            {/* <div className="flex items-start p-2 gap-4">
              <div className="w-4 flex justify-center place-items-center h-4 bg-blue-600 rounded-full mt-1 ">
                <MdCheck className="w-7 h-7  text-white" />
              </div>
              <span className="text-justify text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div> */}
          </div>
        </div>
        <div className=" p-4 bg-blue-600 lg:w-[40%] rounded-full lg:rounded-none  lg:rounded-l-full">
          <div
            className={`  w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-gray-300 lg:mr-8 overflow-hidden`}
            // ref={iconsRef}${            isInView ? "v-m-right" : ""   }
          >
            <Image
              src="/offers/offer-4.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prereq;
