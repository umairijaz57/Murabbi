import Image from "next/image";
import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="animation-loading  flex flex-row h-[10rem] w-[10rem] rounded-full bg-blue-600 pb-4  items-center justify-center">
        <Image src="/logos/circle-logo.png"  alt="" height={120} width={120} />
      </span>
    </div>
  );
}

export default Loading;
