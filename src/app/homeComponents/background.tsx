'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";

type Props = {};

const Background = ({
  bg,
  resources,
  aboutus,
}: {
  bg?: boolean;
  resources?: boolean;
  aboutus?: boolean;
}) => {
  const multiplicand = resources ? 0.7 : aboutus ? 0.8 : 0.85;
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {bg ? (
        <div
          style={{
            position: "relative",
            backgroundImage: `url('/graphicsbg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: `center ${scrollY * multiplicand}px`,
          }}
          className="main-background flex flex-row justify-center items-center bg-fixed  "
        >
          <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
          <div className="flex flex-col items-center z-20 gap-8 ">
            <div className="h-32 w-32 rounded-full bg-blue-500 flex flex-row pb-2 justify-center items-center">
              <Image
                src="/logos/circle-logo.png"
                alt=""
                height={120}
                width={120}
              />
            </div>
            <div
              className="text-center font-bold text-3xl md:text-5xl text-white mix-blend-soft-light "
              style={{
                textShadow: "1px 1px 1px rgba(0, 0, 0, 1)",
                lineHeight: "1.2",
              }}
            >
              In a world where{" "}
              <span className="text-blue-500"> technology </span> is constantly{" "}
              <br /> advancing, the most valuable{" "}
              <span className="text-blue-500"> skill </span> <br /> is the
              ability to keep <span className="text-blue-500"> learning </span>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            backgroundImage: `url('/graphicsbg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: `center ${scrollY * 0.5}px`,
          }}
          className="main-background flex flex-row justify-center items-center  overflow-hidden  "
        >
          <div className="absolute top-[25%] block -right-[4rem] h-56 w-56 rounded-full z-10 border-4 border-blue-500 bg-transparent  animation-offer"></div>
          <div className="absolute bottom-[15%] block right-[5%] h-20 w-20 rounded-full z-50 bg-blue-500 border-4 border-blue-500  animation-offer"></div>
          <div className="absolute top-8  left-8 z-50 flex flex-row justify-center items-center  animation-offer">
            <Image src="/Polygon.png" height={80} width={80} alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600 to-blue-600/80 opacity-100"></div>
          <div className="flex flex-col items-start z-20 gap-8 p-4 ">
            <div
              className="text-left font-bold text-3xl md:text-5xl text-white mix-blend-soft-light "
              style={{
                textShadow: "1px 1px 1px rgba(0, 0, 0, 1)",
                lineHeight: "1.2",
              }}
            >
              Register Yourself For <br /> {" "}
              <span className="text-blue-500"> Best </span> online courses
            </div>
            <Link href='contactus#form'>
            <button className=" md:m-0 py-3 px-4 md:px-6 bg-blue-500 flex flex-row justify-start items-center gap-2  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
              <span>Register Now</span>
              <BsArrowRightShort size={25} />
            </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Background;
