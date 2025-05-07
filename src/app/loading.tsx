import Image from "next/image";
import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[15rem] w-[15rem] relative flex flex-row items-center justify-center">
        <svg
          className="animate-spin h-[8rem] w-[8rem] z-0 text-blue-600 rounded-full border-8   border-blue-600 border-r-white"
          viewBox="0 0 24 24"
        >
          {" "}
        </svg>
        <span className=" flex flex-row h-[6rem] w-[6rem] z-20 absolute rounded-full bg-blue-600  pb-4  items-center justify-center">
          <Image src="/logos/circle-logo.png" alt="" height={200} width={200} />
        </span>
      </div>
    </div>
  );
}

export default Loading;
