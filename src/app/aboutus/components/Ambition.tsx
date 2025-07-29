import useIntersectionObserver from "@/hooks/onViewPort";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Ambition = (props: Props) => {
  const [leftRef, isLInView] = useIntersectionObserver();
  const [rightRef, isRInView] = useIntersectionObserver();

  return (
    <div
      className={`flex flex-col items-center justify-center lg:flex-row lg:justify-center md:gap-6 lg:gap-[10rem] pb-10`}
    >
      <div
        ref={rightRef}
        className={`${
          isRInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  lg:text-left lg:w-[50%] p-4  md:p-0 grid gap-5 transition duration-1000  `}
      >
        <div className="flex justify-between">
          <h2 className="text-3xl md:text-4xl text-center md:text-left  mb-6 text-gray-900/90 font-extrabold">
            Fueling <span className="text-blue-600"> Ambition </span> with{" "}
            <br /> Knowledge and Guidance
          </h2>
        </div>
        <p className="text-gray-600 text-justify text-lg">
          At Murabbi, we understand that traditional training methods don't
          always work for everyone. That's why we offer personalized solutions
          tailored to meet the unique needs of each learner. Our expert trainers
          provide continuous guidance and mentoring to ensure that each learner
          reaches their full potential. With a commitment to excellence,
          innovation, and personalized service, we aspire to be the leading
          provider of training solutions in the digital age. Join us on this
          journey and let us help you unlock your potential.
        </p>
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
          <Image
            src="/aboutus/DrNazia.jpg"
            alt=""
            layout="fill"
            style={{ objectFit: "cover", objectPosition: "50% 30%" }}
            className=" w-full z-20"
          />
        </div>
        <div className=" w-[80%] sm:w-[110%] h-[95%]  sm:h-[115%] absolute border-8 border-blue-600 z-40 top-[3rem] sm:top-[2rem] left-[2rem] sm:-left-[4rem] "></div>
        <div className=" absolute w-[90%] h-[80%] sm:h-full border border-blue-600 -bottom-[0rem]  sm:-bottom-[4rem] overflow-hidden -left-[0rem]  sm:-left-[6rem] ">
          <Image
            src="/aboutus/ambition1.jpg"
            alt=""
            layout="fill"
            style={{ objectFit: "cover", objectPosition: "25% 0%" }}
            className=" w-full z-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default Ambition;
