"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import useIntersectionObserver from "../../hooks/onViewPort";

type Props = {};

const Info = (props: Props) => {
  const [leftRef, isLInView] = useIntersectionObserver();
  const [rightRef, isRInView] = useIntersectionObserver();
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center lg:gap-[5%]  justify-between  overflow-hidden ">
      <div
        ref={rightRef}
        className={` ${
          isRInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } flex flex-col gap-4 transition duration-1000  md:text-left p-4  lg:p-4 lg:w-[55%] opacity-0 `}
      >
        <div className="text-3xl md:text-4xl text-center md:text-left text-gray-900/90 font-extrabold mb-4 ">
          Learn, Grow & Succeed <br /> with{" "}
          <span className="text-blue-600"> Murabbi</span>
        </div>
        <div className="text-lg text-gray-600 ">
          At Murabbi, we offer personalized solutions tailored to meet the
          unique needs of each learner.
        </div>
        <div className="flex items-start place-items-start gap-4 text-lg text-gray-900/90  md:mt-4 group ">
          <div className="w-6 h-6 p-1 text-white rounded-full  flex justify-center place-items-center   mt-1 cursor-pointer bg-blue-600 transition duration-500">
            <AiOutlineCheck className="w-8" />
          </div>
          <span>
            Our expert trainers provide continuous guidance and mentoring to
            ensure that each learner reaches their full potential.
          </span>
        </div>
        <div className="flex items-start place-items-start gap-4 text-lg text-gray-900/90  group">
          <div className="w-6 h-6 p-1 text-white rounded-full  flex justify-center place-items-center   mt-1 cursor-pointer bg-blue-600 transition duration-500">
            <AiOutlineCheck className="w-8   " />
          </div>
          <span>
            With a commitment to excellence, innovation, and personalized
            service, we aspire to be the leading provider of training solutions
            in the digital age.
          </span>
        </div>{" "}
        <div className="flex items-start place-items-start gap-4 text-lg text-gray-900/90  group">
          <div className="w-6 h-6 p-1 text-white rounded-full  flex justify-center place-items-center   mt-1 cursor-pointer bg-blue-600 transition duration-500">
            <AiOutlineCheck className="w-8  " />
          </div>
          <span>
            We foster a diverse and inclusive learning community, bringing
            together individuals from various backgrounds and industries.{" "}
          </span>
        </div>
        <div>
          <Link href="/aboutus">
            <button className="py-3 px-6 w-36 md:mt-4 rounded-lg transition-all text-sm font-bold  duration-500 border-2 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 border-blue-600  ">
              {" "}
              Explore More
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={leftRef}
        className={`opacity-0 h-[20rem] m-auto lg:mx-12 w-[90%] 2 transition duration-1000  relative  lg:w-[30rem] md:h-[35rem]   ${
          //30rem
          isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  `}
      >
        {/* <div className="absolute top-2  -left-[1.5rem] h-72 w-72 rounded-full bg-blue-500 animation-about"></div>
        <div className="absolute top-[10%] hidden md:block -right-[2.5rem] h-72 w-72 rounded-full z-10 bg-gray-300/30 "></div> */}
        {/* <div className="absolute top-[30%] hidden md:block -right-[1.5rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-gradient-to-br bg-blue-600 "></div> */}
        {/* <div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/30 animation-about"></div>
        <div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem] bg-blue-600 animation-about"></div> */}
        <div className=" w-full h-full  rounded-lg  relative">
          <Image
            src="/home-murabbi.png"
            alt=""
            layout="fill"
            style={{ objectFit: "cover", objectPosition: "45% 30%" }}
            className="absolute w-full z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;

{
  /* <div className="absolute top-[30%] -left-[1rem] md:-left-[2rem] h-52 w-52 rounded-full bg-gray-300/60 animation-about"></div>
<div className="absolute top-[10%] hidden md:block -right-[3rem] h-64 w-64 rounded-full z-10 bg-gradient-to-br from-gray-200 to-gray-300/40 "></div>
<div className="absolute top-[30%] hidden md:block -right-[2rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-gradient-to-br  animation-about"></div>
<div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/40 animation-about"></div>
<div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem]  animation-about"></div> */
}
