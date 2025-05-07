import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = { heading: string; text: string; image?: string };

const Hero = (props: Props) => {
  return (
    <div
      id="indicators-carousel"
      className="relative overflow-x-hidden main-bg " // Add overflow-x-hidden to prevent horizontal scrollbar
      data-carousel="static"
    >
      <div className="relative h-full bg-gray-200 overflow-hidden ">
        <Image
          src={props.image ? props.image : ""}
          alt=""
          layout="fill"
          style={{
            objectFit: "cover",
            objectPosition: "30% 0%",
          }}
          className="absolute w-full"
          priority
        />{" "}
        <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
        <div className="p-4 md:p-12 lg:p-20 relative h-full flex flex-col justify-center z-10   hero-content-secondary text-white">
          <h1
            className=" text-5xl font-extrabold  transition-all duration-1000 "
            style={{ transitionDelay: "1s" }}
          >
            {props.heading.split(" ").map((item, idx) => {
              if (idx === 1) return <span key={idx} className="text-blue-500">{item}{" "}</span>;
              else return <span key={idx} > {item}{" "}</span>;
            })}
          </h1>
          <div className="my-6 max-w-3xl">
            <p className=" text-md sm:text-lg   transition-all duration-1000 ">
              {props.text}
            </p>
          </div>
          {/* <Link
            href="/news/PDC"
            target="_blank"
            className="  transition-all duration-1000 "
          >
            <button className=" py-3 px-6 bg-blue-500 w-36 transition-all duration-500 text-sm font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-500">
              Read More
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
