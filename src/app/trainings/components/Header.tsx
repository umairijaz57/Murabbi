import Image from "next/image";
import React from "react";

type Props = {
  description: string;
  Image: string;
  heading: string;
};

const Header = (props: Props) => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-center overflow-hidden px-4 py-4 mt-8 md:mt-12 gap-12 md:gap-0">
      <div className=" lg:max-w-[60%] lg:mr-6 lg:mb-0 text-justify  ">
        <h2 className="text-2xl font-bold my-4 text-center md:text-left">{props.heading}</h2>
        <p className="text-gray-600  text-sm sm:text-base">{props.description}</p>
      </div>
      <div
        className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gray-300 p-4 bg-cover bg-center relative left-0 lg:left-[8rem] overflow-hidden circular "
        
      >
        <Image
          src={props.Image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          fill={true}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Header;
