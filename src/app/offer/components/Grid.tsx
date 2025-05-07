import Image from "next/image";
import React from "react";
import {BsArrowRightShort} from "react-icons/bs";

type Props = {};

const Grid = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:h-[85vh] ">
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="flex flex-col items-start justify-center px-6 py-12 md:py-0 md:px-8 lg:px-16 gap-4 h-full bg-gray-200  hover:bg-gray-300/50 transition duration-500 ">
          <div className="text-3xl font-extrabold text-gray-900/90">
            High Tech Trainings
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero
            tempore officiis quod fugiat! Cupiditate unde quia id reprehenderit
            sunt pariatur,
          </div>
          <button className="py-3 px-6 flex flex-row justify-center items-center gap-2 rounded-lg transition-all text-sm font-semibold duration-500  bg-blue-600 text-white hover:bg-blue-500  ">
            <span>Explore More</span>
            <BsArrowRightShort size={25}/>
          </button>
        </div>
        <div className="relative h-full group overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-70  z-10 transition duration-500"></div>
          <Image
            src="/hero_auto.jpg"
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
            className="z-5 absolute w-full transition transform duration-700 group-hover:scale-110 "
          />
          <div className="flex flex-col items-start justify-center text-white px-6 py-12 md:py-0 md:px-8 lg:px-16 gap-4 relative z-20 h-full">
            <div className="text-3xl font-extrabold ">Low Tech Trainings</div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              libero tempore officiis quod fugiat! Cupiditate unde quia id
              reprehenderit sunt pariatur,
            </div>
            <button className="py-3 px-6 flex flex-row justify-center items-center gap-2 rounded-lg transition-all text-sm font-semibold duration-500  bg-blue-600 text-white hover:bg-blue-500  ">
              <span>Explore More</span>
              <BsArrowRightShort size={25}/>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col justify-center items-center h-full ">
        <div className="relative h-full group overflow-hidden ">
          <div className="absolute inset-0 bg-blue-600 opacity-70  transition duration-500 z-10"></div>
          <Image
            src="/hero_auto.jpg"
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
            className="z-5 absolute w-full transition transform duration-700 group-hover:scale-110  "
          />
          <div className="flex flex-col items-start justify-center text-white px-6 py-12 md:py-0 md:px-8 lg:px-16 gap-4 relative z-20 h-full">
            <div className="text-3xl font-extrabold ">Summer Schools</div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              libero tempore officiis quod fugiat! Cupiditate unde quia id
              reprehenderit sunt pariatur,
            </div>
            <button className="py-3 px-6 flex flex-row justify-center items-center gap-2  rounded-lg transition-all text-sm font-semibold duration-500  bg-blue-600 text-white hover:bg-blue-500  ">
              <span>Explore More</span>
              <BsArrowRightShort size={25}/>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center px-6 py-12 md:py-0 md:px-8 lg:px-16 gap-4 h-full bg-gray-200  hover:bg-gray-300/50 transition duration-500 ">
          <div className="text-3xl font-extrabold text-gray-900/90">
            Workshops
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero
            tempore officiis quod fugiat! Cupiditate unde quia id reprehenderit
            sunt pariatur,
          </div>
          <button className="py-3 px-6 flex flex-row justify-center items-center gap-2 rounded-lg transition-all text-sm font-semibold duration-500  bg-blue-600 text-white hover:bg-blue-500  ">
            <span>Explore More</span>
            <BsArrowRightShort size={25}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
