import useIntersectionObserver from "@/hooks/onViewPort";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const OurBackground = (props: Props) => {
  const [leftRef, isLInView] = useIntersectionObserver();
  const [rightRef, isRInView] = useIntersectionObserver();

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center " id="history-section">
      {/* Background Div */}
      <div
        ref={rightRef}
        className={`${
          isRInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } transition duration-1000 lg:w-[50%] lg:h-full opacity-0 relative z-40`}
      >
        <div className="flex flex-col border-2 border-gray-400/20 shadow-md  shadow-gray-400/10 gap-4 text-justify md:text-left p-4  md:px-12 md:py-12 lg:px-16 lg:py-16 lg:absolute lg:w-[120%] lg:-bottom-[5rem] lg:-left-[8rem] bg-white z-40">
          <div className="text-xl md:text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-600 md:mb-4">
            OUR BACKGROUND
          </div>
          <div className="text-3xl md:text-4xl text-left text-gray-900/90 font-extrabold md:mb-4">
            We are doing something like at
            <span className="text-blue-600"> Murabbi</span>
          </div>
          <div className="flex items-start place-items-start gap-4 text-lg text-gray-600  group">
            <span >
              Murabbi, a nascent organization, was established recently in 2023
              and has embarked on its journey to provide valuable training and
              guidance. With a foundation rooted in a passion for education and
              mentorship, Murabbi aims to empower individuals with knowledge and
              skills. Despite being in its early stages, the organization boasts
              a team with decades of teaching experience. Murabbi has already
              conducted several mock trainings, demonstrating a promising
              beginning and a strong commitment to nurturing growth and
              development. As Murabbi continues to evolve, it aspires to become
              a renowned platform for transformative learning experiences.
            </span>
          </div>
        </div>
      </div>

      <div
        ref={leftRef}
        className={` ${
          isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } transition duration-1000 transform w-full   sm:w-[25rem] h-[25rem] relative mt-6 md:mt-0 cursor-pointer rounded-xl `}
      >
        <div className="absolute -bottom-[15%] -right-[1rem] h-52 w-52 rounded-full bg-blue-500 "></div>
        <div className="absolute top-[10%] -left-[6rem] h-64 w-64 rounded-full z-10 bg-gradient-to-br from-gray-200 to-gray-300/40 animation-about "></div>
        <div className="absolute bottom-[16%] -left-[8rem] h-8 w-8 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/40 animation-about"></div>
        <div className="absolute bottom-[0%] hidden sm:block -left-[5rem] h-20 w-20 rounded-tl-[3rem] rounded-bl-[1.5rem] bg-blue-600 animation-about"></div>
        <div className=" w-[90%] h-[70%] sm:w-full m-auto sm:h-full relative overflow-hidden borderx` border-blue-600 ">
        </div>
        <div className=" w-[80%] sm:w-[110%] h-[95%]  sm:h-[115%] absolute border-8 border-blue-600 z-40 top-[3rem] sm:top-[2rem] left-[2rem] sm:-left-[4rem] "></div>
        <div className=" absolute w-[90%] h-[80%] sm:h-full border border-blue-600 -bottom-[0rem]  sm:-bottom-[4rem] overflow-hidden -left-[0rem]  sm:-left-[6rem] ">
          <Image
            src="/aboutus/background.jpg"
            alt=""
            layout="fill"
            style={{ objectFit: "cover", objectPosition: "50% 80%" }}
            className=" w-full z-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default OurBackground;
