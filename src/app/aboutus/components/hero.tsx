import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative overflow-x-hidden">
        <div className="relative h-[70vh] md:h-[80vh] bg-gray-200 overflow-hidden">
          <Image
            src="/aboutus.jpg"
            alt="Robotics team working together"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "30% 50%",
            }}
            className="absolute w-full"
            priority
          />
          <div className="absolute inset-0 bg-blue-600/80 backdrop-blur-[1px]"></div>
          <div className="p-4 md:p-12 lg:p-20 relative h-full flex flex-col justify-center z-10 text-white">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold transition-all duration-1000 leading-tight"
              style={{ transitionDelay: "1s" }}
            >
              A breakthrough in <span className="text-blue-500">Learning</span>,
              <br />a leap in <span className="text-blue-500">Growth</span> & a surge
              <br />
              in <span className="text-blue-500">Success</span>
            </h1>
            <div className="my-6 max-w-4xl">
              <p className="text-md sm:text-lg lg:text-xl transition-all duration-1000 leading-relaxed">
                At RoboTech, our mission is to be the driving force behind the technological revolution. We strive to
                lead the way in providing innovative and personalized robotics training solutions that empower
                individuals to outshine their competition. We are committed to staying at the forefront of technological
                innovation to achieve this vision and shape a brighter future through robotics education.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
