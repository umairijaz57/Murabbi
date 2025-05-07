import useIntersectionObserver from "@/hooks/onViewPort";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Values = () => {
  const [leftRef, isLInView] = useIntersectionObserver();
  const [rightRef, isRInView] = useIntersectionObserver();
  const [leftRef2, isL2InView] = useIntersectionObserver();
  const [rightRef2, isR2InView] = useIntersectionObserver();

  return (
    <div>
      <div className="flex  flex-col md:flex-row justify-center   m-auto">
        <div
          ref={leftRef}
          className={`${
            isLInView ? "v-m-left" : ""
          } opacity-0 rounded-lg my-2 group md:my-4 bg-white hover:text-white hover:bg-blue-600 transition duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex place-items-center p-4 text-justify justify-center space-x-4 m-auto w-full md:w-[40%]`}
        >
          <Image
            src="/values/value-3.png"
            height={60}
            width={78}
            className=" filter group-hover:brightness-150 my-auto"
            alt=""
          />
          {/* <TbBulbFilled className="w-[8rem] h-[8rem] " /> */}
          <div>
            <div className="text-lg font-bold mb-2  ">Innovation</div>
            <span
              className="text-base "
              style={{
                textAlign: "justify"
              }}
            >
              We don't just keep up with the latest advancements, we create
              them.
            </span>
          </div>
        </div>
        <div
          ref={rightRef}
          className={`${
            isRInView ? "v-m-right" : ""
          } opacity-0 flex my-2 md:my-4  group  bg-white hover:text-white hover:bg-blue-600 transition duration-500 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   place-items-center p-4 text-justify justify-center space-x-4 m-auto w-full md:w-[40%]`}
        >
          <Image
            src="/values/value-2.png"
            className="filter group-hover:brightness-150"
            height={60}
            width={80}
            alt=""
            // className="mt-1"
          />
          <div>
            <div className="text-lg font-bold mb-2   ">Integrity</div>
            <span
              className="text-base  "
              style={{
                textAlign: "justify"
              }}
            >
              Our word is our bond, and we believe in doing what's right, not
              what's easy.
            </span>
          </div>
        </div>
      </div>
      <div className="flex   flex-col md:flex-row justify-evenly  m-auto">
        <div
          ref={leftRef2}
          className={`${
            isL2InView ? "v-m-left" : ""
          } opacity-0 my-2 md:my-4  bg-white group hover:text-white hover:bg-blue-600  transition duration-500 flex rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   place-items-center p-4 text-justify justify-center space-x-4 m-auto w-full md:w-[40%]`}
        >
          <Image
            className="filter group-hover:brightness-150"
            src="/values/value-1.png"
            height={60}
            width={80}
            alt=""
          />
          <div>
            <div className="text-lg font-bold mb-2   ">Trust</div>
            <span
              className="text-base "
              style={{
                textAlign: "justify"
              }}
            >
              Our commitment to your success is unwavering, and we strive to
              earn your trust through every interaction.
            </span>
          </div>
        </div>
        <div
          ref={rightRef2}
          className={`${
            isR2InView ? "v-m-right" : ""
          } opacity-0 my-2 md:my-4  bg-white group hover:text-white hover:bg-blue-600 transition duration-500 flex rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   place-items-center p-4 text-justify justify-center space-x-4 m-auto w-full md:w-[40%]`}
        >
          <Image
            className=" mt-2 filter group-hover:brightness-150"
            src="/values/value-4.png"
            height={60}
            width={80}
            alt=""
            // className="mt-2"
          />
          <div>
            <div className="text-lg font-bold mb-2  ">Research</div>
            <span
              className="text-base "
              style={{
                textAlign: "justify"
              }}
            >
              Dedicated to exploring new horizons and pushing the boundaries of
              knowledge to enhance your learning.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
