"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  const [showItem, setShowItem] = useState<number>(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // Calculate the next slide index
  //     const nextSlide = showItem === 3 ? 1 : showItem + 1;
  //     setShowItem(nextSlide);
  //   }, 8000);

  //   // Clear the timeout when the component unmounts or showItem changes
  //   return () => clearTimeout(timer);
  // }, [showItem]);

  // const forward = () => {
  //   const nextSlide = showItem === 3 ? 0 : showItem + 1;
  //   setShowItem(nextSlide);
  // };

  // const backward = () => {
  //   const nextSlide = showItem === 0 ? 3 : showItem - 1;
  //   setShowItem(nextSlide);
  // };

  const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="bg-gray-200">
      <div
        id="indicators-carousel"
        className="relative overflow-x-hidden main-hero " // Add overflow-x-hidden to prevent horizontal scrollbar
        data-carousel="static"
      >
        <div className="relative h-[95vh] bg-gray-200">
          {
            <div className={`${showItem === 0 ? "" : "hidden"}`}>
              {
                <motion.div
                  key={showItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={` w-full h-full absolute`}
                >
                  <Image
                    src="/hero_landing.jpg"
                    alt=""
                    layout="fill"
                    style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                    className="absolute w-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-600/80 opacity-100"></div>
                  <div className=" p-5 md:p-0  md:pl-16 l absolute bottom-4 md:bottom-2 left-0 z-20  h-full flex flex-col gap-4 justify-center items-start  w-full text-white">
                    <div className="flex flex-col gap-6 lg:w-[50%] mt-20 mb-12  md:mb-0 lg:mt-0 px-2 lg:px-4 ">
                      <div className="text-white border-l-4 border-blue-500 pl-2">
                        EDUCATION SOLUTION
                      </div>
                      <div className="text-white font-bold text-4xl md:text-5xl   ">
                        Learn, Grow & Succeed <br /> with{" "}
                        <span className="text-blue-500"> Murabbi </span>
                      </div>
                      <div className="text-lg text-white ">
                        Are you ready to take your career to the next level?
                        Look no further than Murabbi, where our state-of-the-art
                        training solutions will revolutionize the way, you
                        learn.
                      </div>
                      <div className="flex flex-row gap-4 items-center md:pt-4">
                        <Link href="/aboutus">
                          <button className="py-3 px-4 md:px-6 flex flex-row justify-center items-center bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
                            <span>Find out more</span>
                            <BsArrowRightShort size={25} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
            </div>
          }
          {
            <div className={`${showItem === 1 ? "" : "hidden"}`}>
              {
                <motion.div
                  key={showItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`w-full h-full absolute`}
                >
                  <Image
                    src="/news/web.jpeg"
                    alt=""
                    layout="fill"
                    style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                    className="absolute w-full"
                    priority
                  />

                  <div className="absolute inset-0 bg-blue-600/70 opacity-100"></div>

                  <div className=" p-5 md:p-0  md:pl-16 l absolute bottom-4 md:bottom-2 left-0 z-20  h-full flex flex-col gap-4 justify-center items-start  w-full text-white">
                    <div className="flex flex-col gap-6 lg:w-[50%] mt-20 mb-12  md:mb-0 lg:mt-0 px-2 lg:px-4 ">
                      {/* <div className="text-white border-l-4 border-blue-500 pl-2">
                        EDUCATION SOLUTION
                      </div> */}
                      <div className="text-white font-bold text-4xl md:text-5xl   ">
                        <span className="text-blue-500"> Web </span> Wizardy:
                        From HTML to React Mastery
                      </div>
                      <div className="text-lg text-white ">
                        Gain proficiency in building scalable React
                        applications.
                      </div>
                      <div className="flex flex-row gap-4 items-center md:pt-4">
                        <Link
                          target="_blank"
                          href="https://forms.gle/RU3pfRUxNjBEDybcA"
                        >
                          <button className="py-3 px-4 md:px-6 flex flex-row justify-center items-center bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
                            <span>Register Now</span>
                            <BsArrowRightShort size={25} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
            </div>
          }
          {
            <div className={`${showItem === 2 ? "" : "hidden"}`}>
              {
                <motion.div
                  key={showItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={` w-full h-full absolute`}
                >
                  <Image
                    src="/news/stem.png"
                    alt=""
                    layout="fill"
                    style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                    className="absolute w-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-blue-600/70 opacity-100"></div>

                  <div className=" p-5 md:p-0  md:pl-16 l absolute bottom-4 md:bottom-2 left-0 z-20  h-full flex flex-col gap-4 justify-center items-start  w-full text-white">
                    <div className="flex flex-col gap-6 lg:w-[50%] mt-20 mb-12  md:mb-0 lg:mt-0 px-2 lg:px-4 ">
                      {/* <div className="text-white border-l-4 border-blue-500 pl-2">
                        EDUCATION SOLUTION
                      </div> */}
                      <div className="text-white font-bold text-4xl md:text-5xl   ">
                        Winter <span className="text-blue-500"> STEM </span>{" "}
                        Camp: Igniting Minds, Powering Futures
                      </div>
                      <div className="text-lg text-white ">
                        Join the Winter STEM Camp - Where Young Minds Soar!
                      </div>
                      <div className="flex flex-row gap-4 items-center md:pt-4">
                        <Link target="_blank" href="https://shorturl.at/oCDET">
                          <button className="py-3 px-4 md:px-6 flex flex-row justify-center items-center bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
                            <span>Register Now</span>
                            <BsArrowRightShort size={25} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
            </div>
          }
          {
            <div className={`${showItem === 3 ? "" : "hidden"}`}>
              {
                <motion.div
                  key={showItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={` w-full h-full absolute`}
                >
                  <Image
                    src="/courses/Devops.jpg"
                    alt=""
                    layout="fill"
                    style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                    className="absolute w-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-blue-600/70 opacity-100"></div>

                  <div className=" p-5 md:p-0  md:pl-16 l absolute bottom-4 md:bottom-2 left-0 z-20  h-full flex flex-col gap-4 justify-center items-start  w-full text-white">
                    <div className="flex flex-col gap-6 lg:w-[50%] mt-20 mb-12  md:mb-0 lg:mt-0 px-2 lg:px-4 ">
                      {/* <div className="text-white border-l-4 border-blue-500 pl-2">
                        EDUCATION SOLUTION
                      </div> */}
                      <div className="text-white font-bold text-4xl md:text-5xl   ">
                        <span className="text-blue-500"> DevOps </span> Fast
                        Track
                      </div>
                      <div className="text-lg text-white ">
                        Gain a comprehensive understanding of DevOps principles
                        and practices.
                      </div>
                      <div className="flex flex-row gap-4 items-center md:pt-4">
                        <Link
                          target="_blank"
                          href="https://docs.google.com/forms/d/e/1FAIpQLScEgfLDdT-utE_FNFIzq_qFd7TegLE0W3VbhwRFTKkbRw3Tyg/viewform"
                        >
                          <button className="py-3 px-4 md:px-6 flex flex-row justify-center items-center bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
                            <span>Register Now</span>
                            <BsArrowRightShort size={25} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
            </div>
          }
        </div>
        {/* <div className="absolute  z-30 top-[45%] right-6 ">
          <MdArrowForwardIos size={40} className=" cursor-pointer text-white hover:text-gray-300 " onClick={forward}   />
        </div>
        <div className="absolute z-30 top-[45%] left-6 ">
          <MdArrowBackIos size={40} className=" cursor-pointer text-white hover:text-gray-300  " onClick={backward}  />
        </div>
        <div className="absolute z-30 transition-all duration-100 opacity-70  space-x-6 -translate-x-1/2 top-[90%] right-[35%]  md:right-[40%]  flex-row  flex">
          <button
            type="button"
            onClick={() => {
              setShowItem(0);
            }}
            className={`w-3 h-3 rounded-full  ${
              showItem === 0 ? "bg-blue-500" : "bg-gray-100"
            }`}
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            onClick={() => {
              setShowItem(1);
            }}
            className={`w-3 h-3 rounded-full  ${
              showItem === 1 ? "bg-blue-500" : "bg-gray-100"
            }`}
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            onClick={() => {
              setShowItem(2);
            }}
            className={`w-3 h-3 rounded-full  ${
              showItem === 2 ? "bg-blue-500" : "bg-gray-100"
            }`}
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            onClick={() => {
              setShowItem(3);
            }}
            className={`w-3 h-3 rounded-full  ${
              showItem === 3 ? "bg-blue-500" : "bg-gray-100"
            }`}
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
