"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// Initialize Swiper core
SwiperCore.use([Pagination, Navigation, Autoplay]);

interface Props {
  type: string;
}

const CardSlider = (props: Props) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [startSlide, setStartSlide] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const link = useRef<HTMLAnchorElement>(null);

  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };

  const handleNext = () => {
    if (swiper) {
      const totalSlides = swiper.slides.length;
      const windowWidth = window.innerWidth;
      const slidesToSkip = windowWidth >= 768 ? 3 : 1;
      const nextStartSlide = startSlide + slidesToSkip;
      if (nextStartSlide < totalSlides) {
        swiper.slideTo(nextStartSlide);
        setStartSlide(nextStartSlide);
      }
    }
  };

  const handlePrev = () => {
    if (swiper) {
      const windowWidth = window.innerWidth;
      const slidesToSkip = windowWidth >= 768 ? 3 : 1;
      const prevStartSlide = startSlide - slidesToSkip;
      if (startSlide === 0) {
        swiper.slideTo(0);
      }
      if (prevStartSlide >= 0) {
        swiper.slideTo(prevStartSlide);
        setStartSlide(prevStartSlide);
      }
    }
  };

  useEffect(() => {
    if (swiper) {
      swiper.update(); // Update Swiper instance when activeIndex changes
    }
  }, [activeIndex]);

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  const handleCircleClick = (index: number) => {
    if (swiper) {
      if (index === 0) {
        swiper.slideTo(0);
      } else if (index === 1) {
        swiper.slideTo(3);
      } else if (index === 2) {
        swiper.slideTo(6);
      }
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className={`overflow-hidden`} id="partners-section">
      <div className="transition-all duration-2000 opacity-100 ease-in   ">
        <div
          ref={cardRef}
          className={`relative w-full flex justify-center place-items-center duration-500 transition-all `}
          //   ${
          //   isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          // }
          //  `}
        >
          <div className={`swiper-container w-full md:w-[90%] mt-6 `}>
            <Swiper
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // }}
              onSwiper={handleSwiper}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 2000, // Delay in milliseconds
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                880: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView:
                    props.type === "startups"
                      ? 3
                      : props.type === "partner"
                      ? 4
                      : 3,
                },
              }}
            >
              {props.type === "partner" && (
                <>
                  {/* <SwiperSlide>
                    <div className="flex justify-center place-items-center mb-68 h-[3.5rem] cursor-pointer">
                      <Image
                        src="/logos/EL.png"
                        className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide>
                    <div className="flex justify-center place-items-center mb-8 h-[3.5rem] cursor-pointer">
                      <Image
                        className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100"
                        src={`/logos/truid.png`}
                        alt=""
                        width={120}
                        height={120}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center place-items-center mb-68 h-[3.5rem] cursor-pointer">
                      <Image
                        src={`/logos/pdc.png`}
                        className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center place-items-center md:ml-4 mb-8 h-[3.5rem] cursor-pointer">
                      <Image
                        src={`/logos/sentinalAI.png`}
                        className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100"
                        alt=""
                        width={400}
                        height={400}
                      />
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div className="flex justify-center place-items-center  md:ml-8 mt-1 mb-8 h-[3.5rem] cursor-pointer">
                      <Image
                        src="/logos/takhleeq.png"
                        className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide>
                    <div className="flex justify-center place-items-center mb-8 h-[3.5rem] cursor-pointer">
                      <Image
                        src="/logos/inf.png"
                        className="opacity-40 grayscale hover:grayscale-0 transition duration-500 hover:opacity-100"
                        alt=""
                        width={100}
                        height={200}
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>
          {props.type === "offer" && (
            <div className="absolute bottom-[0] justify-center hidden md:flex  gap-2 z-20">
              <div
                className={`h-2 w-2 bg-gray-300 rounded-full cursor-pointer mt-2`}
                onClick={() => {
                  handleCircleClick(0);
                }}
              ></div>
              <div
                className={`h-2 w-2 bg-gray-300 rounded-full cursor-pointer mt-2 `}
                onClick={() => {
                  handleCircleClick(1);
                }}
              ></div>
              <div
                className={`h-2 w-2 bg-gray-300 rounded-full cursor-pointer mt-2 `}
                onClick={() => {
                  handleCircleClick(2);
                }}
              ></div>
            </div>
          )}
          {props.type === "offer" && (
            <>
              <div
                onClick={handleNext}
                className="hidden sm:block absolute right-0 top-[40%] p-2 h-10 w-10 bg-white text-blue-600 rounded-full cursor-pointer z-20"
              >
                <div>
                  <FiArrowRight size={24} />
                </div>
              </div>
              <div
                onClick={handlePrev}
                className="hidden sm:block absolute left-0 top-[40%] p-2 h-10 w-10 bg-white text-blue-600 rounded-full cursor-pointer z-20"
              >
                <div>
                  <FiArrowLeft size={24} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;

// {props.type === "partner" && (
//   <>
//     <SwiperSlide>
//       <div className="flex justify-center place-items-center  h-[4r5m]">//7.5
//         <Image
//           src="/partners/PDC.png"
//           alt=""
//           width={300}
//           height={300}
//         />
//       </div>
//     </SwiperSlide>
//     <SwiperSlide>
//       <div className="flex justify-center place-items-center  h-[3.5rem]">
//         <Image
//           src="/partners/Takhleeq.png"
//           alt=""
//           width={300}
//           height={300}
//         />
//       </div>
//     </SwiperSlide>
//   </>
// )}
