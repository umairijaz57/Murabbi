import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-8 ">
      <div className="w-full sm:w-[22rem] bg-blue-600 text-white   flex flex-col justify-center items-center gap-4 p-6 md:py-12 shadow-lg hover:shadow-gray-800/70 shadow-gray-800/30 transition duration-500">
        <div className="h-32 w-32  mb-4 flex justify-center items-center">
          <FaPhone className="text-blue-500 " size={80} />
        </div>
        <div className="text-base">+92 336 5935790</div>
        <div className="text-2xl font-extrabold">Phone Number</div>
      </div>
      <div className=" w-full sm:w-[22rem] bg-blue-500 text-white   flex flex-col justify-center items-center gap-4 p-6 md:py-12 shadow-lg hover:shadow-gray-800/60 shadow-gray-800/30 transition duration-500">
        <div className="h-32 w-32  mb-4 flex justify-center items-center">
          <MdLocationPin className="text-white   " size={80} />
        </div>
        <Link
          href="https://goo.gl/maps/ZuRCE91uV1U81f5JA"
          target="_blank"
          className=" text-base"
        >
          <span>NUST Sector H-12, Islamabad, Pakistan</span>
        </Link>
        <div className="text-2xl font-extrabold">Location</div>
      </div>
      <div className="w-full sm:w-[22rem] bg-gray-200 flex flex-col  text-blue-600  justify-center items-center gap-4 p-6 md:py-12 shadow-lg hover:shadow-gray-800/30 shadow-gray-800/10 duration-500">
        <div className="h-32 w-32  mb-4 flex justify-center items-center">
          <FaEnvelope className="text-blue-600" size={80} />
        </div>{" "}
        <Link href="mailto:hr@murabbi.io" className="underline text-base">
          <span>hr@murabbi.io</span>
        </Link>
        <div className="text-2xl font-extrabold">Send Us Email</div>
      </div>
    </div>
  );
};

export default Info;
