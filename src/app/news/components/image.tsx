import React from "react";
import Image from "next/image";

type Props = {Image:string};

const HImage = (props: Props) => {
  return (
    <>
      <div className="relative top-8">
        <Image
          src={props.Image}
          layout="responsive"
          width={1000}
          height={500}
          className="max-w-full md:max-w-[90%] m-auto max-h-[35rem] rounded-xl"
          style={{ objectFit: "cover",objectPosition:'50% 50%' }}
          alt=""
        />
        <div className="absolute inset-0 max-w-full md:max-w-[90%] m-auto rounded-xl  opacity-40 bg-gray-900"></div>
      </div>
    </>
  );
};

export default HImage;
