"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useIntersectionObserver from "../../hooks/onViewPort";
// Initialize Swiper core
SwiperCore.use([Navigation]);

interface Props {
  items: {
    id: number;
    title: string;
    description: string;
    description1: string;
    link: string;
    mail: string;
    image: string;
  }[];
}

const Slider = (props: Props) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [right, isRInView] = useIntersectionObserver();

  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <div id="teams-section" className="overflow-hidden" >
      <div
        ref={right}
        className={`${
          isRInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } transition duration-1000 relative w-full flex justify-center `}
        id="team-section"
      >
        <div className="w-full overflow-hidden justify ">
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1}
            onSwiper={handleSwiper}
            autoplay={{
              delay: 4000, // Delay in milliseconds
            }}
            // navigation // Enable navigation buttons
            breakpoints={{
              // Responsive breakpoints
              640: {
                slidesPerView: 1, // Number of slides to show on smaller screens
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {props.items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="py-8 sm:py-12 px-12 mt-6  sm:px-16 m-auto w-full sm:w-[25rem] h-[30rem]  ">
                  <div className="block h-full rounded-lg bg-white border-2 border-gray-400/10 hover:border-white hover:scale-110  transition duration-500  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex justify-center">
                      <div className="flex justify-center mt-[10px]">
                        <div className="relative mx-auto rounded-full border-2 border-white  h-40 sm:h-[200px] w-40 sm:w-[200px] overflow-hidden">
                          <Image
                            src={item.image}
                            alt=""
                            layout="fill"
                            style={{
                              objectFit: "cover",
                              objectPosition: "50% 30%",
                            }}
                            className="absolute w-full "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h5 className="mb-4 text-xl font-bold text-blue-600">
                        {item.title}
                      </h5>
                      <p className="mb-6">{item.description}</p>
                      <ul className="mx-auto flex list-inside justify-center">
                        <Link
                          className={`${
                            item.link === "" ? "hidden" : ""
                          } p-2 h-8 w-8   rounded-full`}
                          href={item.link}
                          target="_blank"
                        >
                          <FaLinkedinIn
                            size={20}
                            className="hover:text-blue-500"
                          />
                        </Link>
                        <Link
                          className={`${
                            item.mail === "" ? "hidden" : ""
                          } p-2 h-8 w-8 rounded-full`}
                          target="_blank"
                          href={`mailto:${item.mail}`}
                        >
                          <FaEnvelope
                            size={20}
                            className="hover:text-blue-500"
                          />
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          onClick={handleNext}
          className="absolute right-0 top-[45%] p-2    rounded-full cursor-pointer z-20"
        >
          <div>
            <AiOutlineRight
              className="text-blue-600/70 hover:text-blue-600"
              size={40}
            />
          </div>
        </div>
        <div
          onClick={handlePrev}
          className="absolute left-0 top-[45%] p-2    rounded-full cursor-pointer z-20"
        >
          <div>
            <AiOutlineLeft
              className="text-blue-600/70 hover:text-blue-600"
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
