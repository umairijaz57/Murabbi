"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {};

function Instructors({}: Props) {
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
  const [showItem, setShowItem] = useState<number>(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next slide index
      const nextSlide = showItem === 2 ? 1 : showItem + 1;
      setShowItem(nextSlide);
    }, 6000);

    // Clear the timeout when the component unmounts or showItem changes
    return () => clearTimeout(timer);
  }, [showItem]);

  return (
    <div
      id="indicators-carousel"
      className={`relative w-full overflow-hidden  `}
      data-carousel="static"
    >
      <div 
      ref={left} className={`relative  overflow-hidden  transition duration-500 ${
        //pr-4 pb-8
        isLInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }  `}>
        <div className={`${showItem == 1 ? "" : "hidden"}`} data-carousel-item>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-12  pb-4 md:pb-0  md:gap-4 opacity-0 transition-all duration-75  ease-in-out animate-slide-in-from-right py-2">
            <div className="lg:text-left lg:max-w-[70%]">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold mr-2 mb-4 text-blue-600 ">
                  Dr. Wajahat Hussain
                </h2>
              </div>
              <p
                className="text-base text-justify"
                style={{
                  transitionDelay: "3s",
                  textAlign: "justify",
                  hyphens: "auto",
                  wordSpacing: "-0.5px",
                }}
              >
                Dr. Wajahat is an{" "}
                <span className="font-bold">
                  {" "}
                  Assistant Professor at SEECS, NUST,
                </span>{" "}
                holding a PhD in Robotics from the University of Zaragoza and a
                Masters from Technical University Munich. His influential
                research in <span className="font-bold">
                  {" "}
                  AI and robotics
                </span>{" "}
                has been featured in many renowned conferences such as: PETS,
                BMVC, AAAI, RSS, ICCV, IROS, WACV, and AURO. He is committed to
                making AI accessible to everyone, simplifying complex AI
                concepts for easy understanding.
              </p>
            </div>
            <div className="w-64 h-64 bg-gray-300  rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-lg">
              <Image
                src="/Dr.WajahatHussain.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "10% 10%",
                }}
              />
            </div>
          </div>
        </div>

        <div className={`${showItem == 2 ? "" : "hidden"}`} data-carousel-item>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-12  pb-4 md:pb-0  md:gap-4 opacity-0 transition-all duration-75  ease-in-out animate-slide-in-from-right py-2">
            <div className="lg:text-left lg:max-w-[70%]">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold mr-2 mb-4 text-blue-600 ">
                  Dr. Abid Rafique
                </h2>
              </div>
              <p
                className="text-base text-justify"
                style={{
                  transitionDelay: "3s",
                  textAlign: "justify",
                  hyphens: "auto",
                  wordSpacing: "-0.5px",
                }}
              >
                Dr. Abid is the{" "}
                <span className="font-bold">
                  {" "}
                  Chairman and Executive Founder of Murabbi
                </span>
                . He is a serial entrepreneur with over 21 years of industrial
                experience and 5 startups with a successful 6M PKR GBP exit from
                AuditXPRT. His startup,<span className="font-bold"> truID</span>
                , was recognized as one of the top 15 innovative startups by HEC
                - World Bank Group and received an 8M PKR cash award. Dr. Abid
                has done his MS from Technical University Munich and PhD from
                Imperial College London and is currently an Assistant Professor
                at SEECS, NUST.
              </p>
            </div>
            <div className="w-64 h-64 bg-gray-300  rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-lg">
              <Image
                src="/DS.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "10% 60%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-0 left-1/2">
        <button
          type="button"
          onClick={() => {
            setShowItem(1);
          }}
          className={`w-2 h-2 rounded-full ${
            showItem == 1 ? "bg-gray-500" : "bg-gray-300"
          } `}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          onClick={() => {
            setShowItem(2);
          }}
          className={`w-2 h-2 rounded-full ${
            showItem == 2 ? "bg-gray-500" : "bg-gray-300"
          } `}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </div>
    </div>
  );
}

export default Instructors;
