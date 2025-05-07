"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = { title: string; description: string; image: string; id: string };

const Header = (props: Props) => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between overflow-hidden lg:place-items-start py-1 md:py-0 gap-12 md:gap-4 mt-12 md:mt-16 md:pb-4">
      <div
        className={`v-m-left lg:text-left lg:max-w-[70%] grid gap-5 opacity-0 `}
      >
        <div className="flex justify-center  md:justify-start  ">
          <h2 className="text-2xl font-bold mr-2 ">{props.title}</h2>
        </div>
        <p
          className="text-gray-600 text-justify :text-base"
          style={{
            textAlign: "justify",
            hyphens: "auto",
            wordSpacing: "-0.5px",
          }}
        >
          {props.description}
        </p>
        <div>
          <div className="mb-2 text-sm flex gap-10 ">
            {/* <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-300 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-2 text-sm font-bold text-black ">(4.6)</p>
            </div> */}
            <div className="ml-2 text-sm font-bold text-black ">2 months</div>
          </div>
        </div>
        <Link href={`/register/${props.id}-${props.title}`} target="_blank">
          <button
            className="bg-blue-600 py-3 px-6 w-36 transition-all duration-500 text-sm font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600"
            // onClick={() => signIn()}
          >
            Register Now
          </button>
        </Link>
      </div>
      <div
        className={`opacity-0 h-[20rem]   w-full 2 transition duration-500  relative md:w-[70%] lg:w-[20rem] md:h-[20rem] v-m-right `}
      >
        {/* <div className="absolute -bottom-[6%] -right-[1rem] h-52 w-52 rounded-full bg-blue-600 animation-about"></div>
        <div className="absolute top-[5%] -left-[3rem] h-52 w-52 rounded-[6.5rem] z-10 bg-gradient-to-br from-blue-600 to-blue-500 animation-about"></div>
        <div className="absolute top-[30%] -left-[2rem] h-8 w-32 rounded-tl-[8rem] rounded-tr-[6rem] rounded-bl-[16rem] rounded-br-[2rem] z-20 bg-gradient-to-br bg-blue-500 animation-about"></div>
        <div className="absolute bottom-[20%] -left-[3rem] h-8 w-8 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-blue-600 animation-about"></div>
        <div className="absolute -bottom-[1rem] -left-[2rem] h-20 w-20 rounded-tl-[3rem] rounded-bl-[1.5rem] rounded-br-[2rem] bg-blue-500 animation-about"></div> */}
        <div className="bg-gray-400 w-full h-full   overflow-hidden rounded-xl">
          <Image
            src={props.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover absolute z-20 "
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "30% 30%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
