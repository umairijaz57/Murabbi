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
        className={`${
          isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } transition duration-1000 relative z-30 h-[20rem] md:h-[30rem]  w-full  lg:w-[35rem] lg:h-[35rem]`}
      >
        <div className="bg-gray-300/40 w-full h-full overflow-hidden relative">
          <Image
            src="/aboutus/background.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            className="absolute w-full z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBackground;
