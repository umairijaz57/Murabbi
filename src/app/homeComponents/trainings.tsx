"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineUp } from "react-icons/ai";
import Training from "../offer/components/Training";
import useIntersectionObserver from "../../hooks/onViewPort";

type Props = {};

const Trainings = (props: Props) => {
  const [leftRef, isLInView] = useIntersectionObserver();
  const [rightRef, isRInView] = useIntersectionObserver();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center lg:gap-[10%]  justify-center md:py-4  overflow-hidden ">
      <div
        ref={leftRef}
        className={` ${
          isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } flex flex-col gap-4 transition duration-1000 text-justify md:text-left p-4 lg:p-0  lg:w-3/4 opacity-0 lg:ml-8 `}
      >
        <div className="text-3xl md:text-4xl text-center md:text-left text-gray-900/90 font-extrabold mb-4 ">
          Learn, Grow & Succeed <br /> with{" "}
          <span className="text-blue-600"> Murabbi</span>
        </div>
        <div className="text-lg text-gray-600 ">
          At Murabbi, our mission is to be the driving force behind the
          technological revolution. We strive to lead the way in providing
          innovative and personalized training solutions that empower
          individuals to outshine their competition.
        </div>
        {!show ? (
          <div
            className="text-blue-600 hover:text-blue-500 text-base font-bold "
            onClick={() => {
              setShow(true);
            }}
          >
            Read More
          </div>
        ) : (
          <div className="show-testimonial">
            <div className="text-lg text-gray-600 ">
              With cutting-edge bootcamps, workshops, and seminars in areas like
              blockchain, artificial intelligence, PCB design, etc., we aim to
              create a culture of continuous learning where learners thrive in
              the digital age. We are committed to staying at the forefront of
              technological innovation to achieve this vision and shape a
              brighter future for all.
            </div>
            <button
              className=" m-auto mt-4 text-white  rounded-full flex justify-center place-items-center"
              onClick={() => {
                setShow(false);
              }}
            >
              <AiOutlineUp
                className="text-blue-600/70 hover:text-blue-600"
                size={40}
              />
            </button>
          </div>
        )}
        {/* <div>
          <Link href="/aboutus">
            <button className="py-3 px-6 w-36 md:mt-2 rounded-lg transition-all text-sm font-bold duration-500 border-2 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 border-blue-600 ">
              {" "}
              Explore More
            </button>
          </Link>
        </div> */}
      </div>
      <div
        ref={rightRef}
        className={` flex flex-row flex-wrap gap-6 justify-center lg:mr-6 lg:justify-end items-center transition duration-500   ${
          //30rem
          isRInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }  `}
      >
        <Link href="/trainings/high">
          <div
            className={`flex flex-col gap-2 items-start justify-start shadow-lg shadow-gray-600/10  cursor-pointer px-6 py-4 w-72 h-96  rounded-lg bg-white border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-gray-600/50 transition transform  duration-500 hover:-translate-y-2`}
          >
            <div className="relative w-24 h-24 p-4 flex flex-row justify-center items-center bg-gray-200 border border-gray-300 mb-2 rounded-full">
              <Image
                src="/trainings/high-tech.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className=" text-xl md:text-2xl font-bold">
              High Tech Trainings
            </div>
            <div className="text-base">
              Expand your technical expertise with Murabbi's cutting-edge
              high-tech courses and stay ahead in fast-paced world of
              technology.
            </div>
            <div>
              <Link href="//trainings/high">
                <button className=" md:mt-2 rounded-lg transition-all text-sm font-bold duration-500 text-blue-500 ">
                  {" "}
                  View More
                </button>
              </Link>
            </div>
          </div>
        </Link>

        <Link href="/trainings/low">
          <div
            className={`flex flex-col gap-2 items-start justify-start shadow-lg shadow-gray-600/10  cursor-pointer px-6 py-4 w-72 h-96  rounded-lg bg-white border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-gray-600/50 transition transform  duration-500  hover:-translate-y-2`}
          >
            <div className="relative w-24 h-24 p-4 flex flex-row justify-center items-center bg-gray-200 border border-gray-300 mb-2 rounded-full">
              <Image
                src="/trainings/low-tech.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className=" text-xl md:text-2xl font-bold">
              Low Tech Trainings
            </div>
            <div className="text-base">
              Enhance your creative and digital skills with hands-on training to
              excel in realm of digital and visual communication.
            </div>
            <div>
              <Link href="/trainings/low">
                <button className=" md:mt-2 rounded-lg transition-all text-sm font-bold duration-500 text-blue-500 ">
                  {" "}
                  View More
                </button>
              </Link>
            </div>
          </div>
        </Link>

        <Link href="/trainings/summer-winter-camps">
          <div
            className={`flex flex-col gap-2 items-start justify-start shadow-lg shadow-gray-600/10  cursor-pointer px-6 py-4 w-72 h-96  rounded-lg bg-white border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-gray-600/50 transition transform  duration-500  hover:-translate-y-2`}
          >
            <div className="relative w-24 h-24 p-4 flex flex-row justify-center items-center bg-gray-200 border border-gray-300 mb-2 rounded-full">
              <Image
                src="/trainings/summer-camps.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className=" text-xl md:text-2xl font-bold">Summer Schools</div>
            <div className="text-base">
              Experience a summer filled with exploration, learning, and fun at
              Murabbi's Summer Schools.
            </div>
            <div>
              <Link href="/trainings/summer-winter-camps">
                <button className=" md:mt-2 rounded-lg transition-all text-sm font-bold duration-500 text-blue-500 ">
                  {" "}
                  View More
                </button>
              </Link>
            </div>
          </div>
        </Link>
        <Link href="/trainings/workshops">
          <div
            className={`flex flex-col gap-2 items-start justify-start shadow-lg shadow-gray-600/10  cursor-pointer px-6 py-4 w-72 h-96  rounded-lg bg-white border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-gray-600/50 transition transform  duration-500  hover:-translate-y-2`}
          >
            <div className="relative w-24 h-24 p-4 flex flex-row justify-center items-center bg-gray-200 border border-gray-300 mb-2 rounded-full">
              <Image
                src="/trainings/workshop.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className=" text-xl md:text-2xl font-bold">Workshops</div>
            <div className="text-base">
              Acquire in-depth knowledge of school leadership knowledge
              management through our extensive workshop sessions.
            </div>
            <div>
              <Link href="/aboutus">
                <button className=" md:mt-2 rounded-lg transition-all text-sm font-bold duration-500 text-blue-500  ">
                  {" "}
                  View More
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Trainings;

{
  /* <div className="absolute top-[30%] -left-[1rem] md:-left-[2rem] h-52 w-52 rounded-full bg-gray-300/60 animation-about"></div>
<div className="absolute top-[10%] hidden md:block -right-[3rem] h-64 w-64 rounded-full z-10 bg-gradient-to-br from-gray-200 to-gray-300/40 "></div>
<div className="absolute top-[30%] hidden md:block -right-[2rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-gradient-to-br bg-gray-200 animation-about"></div>
<div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/40 animation-about"></div>
<div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem] bg-gray-200 animation-about"></div> */
}
