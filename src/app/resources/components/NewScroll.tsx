import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const NewsHero = (props: Props) => {
  const [showItem, setShowItem] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean[]>([true, true, true]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change the breakpoint as per your requirement
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next slide index
      const nextSlide = showItem === 3 ? 1 : showItem + 1;
      setShowItem(nextSlide);
    }, 8000);

    // Clear the timeout when the component unmounts or showItem changes
    return () => clearTimeout(timer);
  }, [showItem]);

  const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };

  const handleImageLoad = (slideIndex: number) => {
    setIsLoading((prevLoading) => {
      const updatedLoading = [...prevLoading];
      updatedLoading[slideIndex - 1] = false;
      return updatedLoading;
    });
  };

  return (
    <div
      id="indicators-carousel"
      className="relative overflow-x-hidden main-bg" // Add overflow-x-hidden to prevent horizontal scrollbar
      data-carousel="static"
    >
      <Image
        src="/PDC/S1_auto.jpg"
        alt=""
        layout="fill"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        className="absolute w-full hidden"
        priority
        onLoad={() => handleImageLoad(1)}
      />
      <Image
        src="/PDC/S2_auto.jpg"
        alt=""
        layout="fill"
        style={{ objectFit: "cover", objectPosition: "50% 30%" }}
        className="absolute w-full hidden"
        priority
        onLoad={() => handleImageLoad(2)}
      />

      <Image
        src="/PDC/S3_auto.jpg"
        alt=""
        layout="fill"
        style={{ objectFit: "cover", objectPosition: "50% 30%" }}
        className="absolute w-full hidden"
        priority
        onLoad={() => handleImageLoad(3)}
      />

      <div className="relative h-full bg-gray-200">
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
                className={`${
                  !isLoading[0] ? "" : "hidden"
                }w-full h-full absolute`}
              >
                <Image
                  src="/PDC/S1_auto.jpg"
                  alt=""
                  layout="fill"
                  style={{
                    objectFit: "cover",
                    objectPosition: isMobile ? "0% 70%" : "50% 70%",
                  }}
                  className="absolute w-full"
                  priority
                  onLoad={() => handleImageLoad(1)}
                />
                <div className="absolute inset-0 bg-blue-600 opacity-70" style={{mixBlendMode:'multiply'}}></div>

                <div className="p-10 absolute bottom-12 left-0 z-10  w-full text-white">
                  <div className= "text-lg font-bold text-white border-l-4 border-blue-500 pl-2 mb-2 opacity-0 animate-slide-in-from-left">
                    Trending Now
                  </div>
                  <h1
                    className=" text-4xl md:text-5xl font-extrabold opacity-0 transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                    style={{ transitionDelay: "1s" }}
                  >
                    <span className="text-blue-500">PDC</span> Collaboration
                  </h1>
                  <div className="my-6 max-w-3xl">
                    <p
                      className="text-md sm:text-lg opacity-0 text-justify transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                      style={{
                        transitionDelay: "3s",
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      Murabbi and NUST Professional Development Centre Join
                      Forces to Transform Learning and Empower Future Innovators
                      in Pakistan.
                    </p>
                  </div>
                  <Link
                    href="/news/PDC"
                    target="_blank"
                    className="opacity-0  transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                  >
                    <button className=" py-3 px-6 bg-blue-500 w-36 transition-all duration-500 text-sm font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-500">
                      Read More
                    </button>
                  </Link>
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
                className={`${
                  !isLoading[1] ? "" : "hidden"
                }w-full h-full absolute`}
              >
                <Image
                  src="/PDC/S2_auto.jpg"
                  alt=""
                  layout="fill"
                  style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                  className="absolute w-full"
                  priority
                  onLoad={() => handleImageLoad(2)}
                />
                <div className="absolute inset-0 bg-blue-600 opacity-70" style={{mixBlendMode:'multiply'}}></div>

                <div className="p-10 absolute bottom-12 left-0 z-10  w-full text-white">
                  <div className= "text-lg font-bold text-white border-l-4 border-blue-500 pl-2 mb-2 opacity-0 animate-slide-in-from-left">
                    Trending Now
                  </div>
                  <h1
                    className=" text-4xl md:text-5xl font-extrabold opacity-0 transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                    style={{ transitionDelay: "1s" }}
                  >
                    <span className="text-blue-500">PDC</span> Collaboration
                  </h1>
                  <div className="my-6 max-w-3xl">
                    <p
                      className="text-md sm:text-lg opacity-0 text-justify transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                      style={{
                        transitionDelay: "3s",
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      Murabbi and NUST Professional Development Centre Join
                      Forces to Transform Learning and Empower Future Innovators
                      in Pakistan.
                    </p>
                  </div>
                  <Link
                    href="/news/PDC"
                    target="_blank"
                    className="opacity-0  transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                  >
                    <button className=" py-3 px-6 bg-blue-500 w-36 transition-all duration-500 text-sm font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </motion.div>
            }
          </div>
        }
        {
          <div className={`${showItem == 3 ? "" : "hidden"}`}>
            {
              <motion.div
                key={showItem}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${
                  !isLoading[2] ? "" : "hidden"
                }w-full h-full absolute`}
              >
                <Image
                  src="/PDC/S3_auto.jpg"
                  alt=""
                  layout="fill"
                  style={{
                    objectFit: "cover",
                    objectPosition: isMobile ? "90% 70%" : "50% 70%",
                  }}
                  className="absolute w-full"
                  priority
                  onLoad={() => handleImageLoad(3)}
                />{" "}
                <div className="absolute inset-0 bg-blue-600 opacity-70" style={{mixBlendMode:'multiply'}}></div>
                <div className="p-10 absolute bottom-12 left-0 z-10  w-full text-white">
                  <div className= "text-lg font-bold text-white border-l-4 border-blue-500 pl-2 mb-2 opacity-0 animate-slide-in-from-left">
                    Trending Now
                  </div>
                  <h1
                    className=" text-4xl md:text-5xl font-extrabold opacity-0 transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                    style={{ transitionDelay: "1s" }}
                  >
                    <span className="text-blue-500">PDC</span> Collaboration
                  </h1>
                  <div className="my-6 max-w-3xl">
                    <p
                      className=" text-md sm:text-lg opacity-0 text-justify transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                      style={{
                        transitionDelay: "3s",
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      Murabbi and NUST Professional Development Centre Join
                      Forces to Transform Learning and Empower Future Innovators
                      in Pakistan.
                    </p>
                  </div>
                  <Link
                    href="/news/PDC"
                    target="_blank"
                    className="opacity-0  transition-all duration-1000 ease-in-out animate-slide-in-from-left"
                  >
                    <button className=" py-3 px-6 bg-blue-500 w-36 transition-all duration-500 text-sm font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </motion.div>
            }
          </div>
        }
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-3 left-1/2">
        <button
          type="button"
          onClick={() => {
            setShowItem(1);
          }}
          className={`w-2 h-2 rounded-full ${
            showItem === 1 ? "bg-blue-600" : "bg-gray-100"
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
          className={`w-2 h-2 rounded-full ${
            showItem === 2 ? "bg-blue-600" : "bg-gray-100"
          }`}
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          onClick={() => {
            setShowItem(3);
          }}
          className={`w-2 h-2 rounded-full ${
            showItem === 3 ? "bg-blue-600" : "bg-gray-100"
          }`}
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
    </div>
  );
};

export default NewsHero;
