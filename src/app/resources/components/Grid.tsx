"use client"
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function Grid({}: Props) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto w-full sm:w-[80%] md:w-full text-white mt-12 md:mt-16">
        <div className="grid gap-4">
          <div
            className={`h-96 overflow-hidden relative bg-blue-600  hover:shadow-lg hover:shadow-blue-600  border border-blue-600 transform transition duration-300 hover:-translate-y-2 ${
              hoveredIndex === 0 ? "bg-white text-blue-600" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex !== 0 && (
              <Image
                src="/courses/high/block.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 30%",
                }}
                className="z-5 absolute w-full opacity-70"
              />
            )}
            <div className={`${hoveredIndex == 0? "": "glowing-background"} absolute top-0 left-0 py-4 px-4 md:px-8 z-20 h-full flex flex-col justify-center place-items-center`}>
              <div className="text-xl md:text-2xl font-bold text-center">
                Lorem ipsum dolor, sit amet consectetur
              </div>
              <div className={`${hoveredIndex == 0?'text-black':''} text-base mt-6 text-justify`} style={{textAlign:'justify',hyphens:'auto',wordSpacing:'-0.5px'}}>
                Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit
                amet, consectetur orem ipsum dolor  sit amet, consectetur .Lorem
                ipsum dolor sit amet, consectetur orem ipsum dolor sit amet,
                consectetur orem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
          <div
            className={`h-72 relative overflow-hidden bg-blue-600 hover:shadow-lg hover:shadow-blue-600   border border-blue-600 transform transition duration-300 hover:-translate-y-2 ${
              hoveredIndex === 1 ? "bg-white text-blue-600" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex !== 1 && (
              <Image
                src="/courses/high/offer-1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 30%",
                }}
                className="z-5 absolute w-full opacity-70"
              />
            )}
            <div className={`${hoveredIndex == 1? "": "glowing-background"} absolute top-0 left-0 py-4 px-4 md:px-8 z-20 h-full flex flex-col justify-center place-items-center`}>
              <div className="text-xl md:text-2xl font-bold text-center">
                Lorem ipsum dolor, sit amet consectetur
              </div>
              <div className={`${hoveredIndex == 1?'text-black':''} text-base mt-6 text-justify`} style={{textAlign:'justify',hyphens:'auto',wordSpacing:'-0.5px'}}>
                Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit
                amet, consectetur orem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` h-[34rem] sm:h-[25rem] md:h-full hover:shadow-lg hover:shadow-blue-600 relative overflow-hidden bg-blue-600   border border-blue-600 transform transition duration-300 hover:-translate-y-2 ${
              hoveredIndex === 2 ? "bg-white text-blue-600" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex !== 2 && (
              <Image
                src="/courses/high/Machinee.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 30%",
                }}
                className="z-5 absolute w-full opacity-70"
              />
            )}
            <div className={`${hoveredIndex == 2? "": "glowing-background"}  absolute top-0 left-0 py-4 px-4 md:px-8 z-20 h-full flex flex-col justify-center place-items-center`}>
              <div className="text-xl md:text-2xl font-bold text-center">
                Lorem ipsum dolor, sit amet consectetur
              </div>
              <div className={`${hoveredIndex == 2?'text-black':''} text-base mt-6 text-justify`} style={{textAlign:'justify',hyphens:'auto',wordSpacing:'-0.5px'}}>
                Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit
                amet, consectetur orem ipsum dolor sit amet, consectetur Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. <br /> Repellat
                adipisci voluptas sunt necessitatibus quibusdam id dolor
                nesciunt praesentium aliquid laborum cumque, in ea enim eaque<br /> Repellat
                adipisci voluptas sunt necessitatibus quibusdam id dolor
                nesciunt praesentium aliquid laborum cumque, in ea enim eaque
                quas voluptates veritatis deserunt consequatur. <br />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div
            className={`h-72 relative overflow-hidden hover:shadow-lg hover:shadow-blue-600 bg-blue-600   border border-blue-600 transform transition duration-300 hover:-translate-y-2 ${
              hoveredIndex === 3 ? "bg-white text-blue-600" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex !== 3 && (
              <Image
                src="/courses/high/offer-1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 30%",
                }}
                className="z-5 absolute w-full opacity-70"
              />
            )}
            <div className={`${hoveredIndex == 3? "": "glowing-background"} absolute top-0 left-0 py-4 px-4 md:px-8 z-20 h-full flex flex-col justify-center place-items-center`}>
              <div className="text-xl md:text-2xl font-bold text-center">
                Lorem ipsum dolor, sit amet consectetur
              </div>
              <div className={`${hoveredIndex == 3?'text-black':''} text-base mt-6 text-justify`} style={{textAlign:'justify',hyphens:'auto',wordSpacing:'-0.5px'}}>
                Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit
                amet, consectetur orem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
          <div
            className={`h-96 relative overflow-hidden hover:shadow-lg hover:shadow-blue-600 bg-blue-600   border border-blue-600 transform transition duration-300 hover:-translate-y-2 ${
              hoveredIndex === 4 ? "bg-white text-blue-600" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex !== 4 && (
              <Image
                src="/courses/high/block.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 30%",
                }}
                className="z-5 absolute w-full opacity-70"
              />
            )}
           <div className={`${hoveredIndex == 4? "": "glowing-background"} absolute top-0 left-0 py-4 px-4 md:px-8 z-20 h-full flex flex-col justify-center place-items-center`}>
              <div className="text-xl md:text-2xl font-bold text-center">
                Lorem ipsum dolor, sit amet consectetur
              </div>
              <div className={`${hoveredIndex == 4?'text-black':''} text-base mt-6 text-justify`} style={{textAlign:'justify',hyphens:'auto',wordSpacing:'-0.5px'}}>
                Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit
                amet, consectetur orem ipsum dolor sit amet, consectetur .Lorem
                ipsum dolor sit amet, consectetur orem ipsum dolor sit amet,
                consectetur orem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
