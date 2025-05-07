"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

// Initialize Swiper core
SwiperCore.use([Pagination]);

interface Props {
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

const CardSlider = (props: Props) => {
  const [swiper, setSwiper] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };

  const handleClick = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="swiper-container overflow-hidden w-full relative   ">
        <Swiper // Space between slides
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          onSwiper={handleSwiper}
          spaceBetween={20} // Space between slides
          slidesPerView={1}
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
              <div className="grid justify-center  justify-items-center relative text-white hover:bg-blue-700  cursor-pointer bg-blue-600 h-96 m-auto w-80 md:w-[90%]  rounded-2xl  p-4">
                <div className="absolute top-0 right-0 p-2">
                  <FiArrowRight size={24} color="white" />
                </div>
                <div className="w-32 h-32 rounded-full bg-gray-300 m-2 transition duration-300 transform cursor-pointer shadow-md hover:-translate-y-2 border-blue-600 border-4"></div>
                <div className="text-2xl font-bold">Heading</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisi amet ec tetur
                  adipisi
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" flex justify-center p-2">
        <div className="swiper-pagination transform -translate-x-1/2 "></div>
      </div>
    </div>
  );
};

export default CardSlider;
