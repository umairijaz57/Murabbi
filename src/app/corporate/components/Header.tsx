import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between p-4 gap-4 md:gap-0 ">
      <div className="lg:text-left lg:max-w-[70%] grid gap-5">
        <div className="flex justify-between  ">
          <h2 className="text-2xl font-bold mr-2 ">Heading</h2>
        </div>
        <p className="text-gray-600 text-justify">
          At Murabbi, we understand that traditional training methods don't
          always work for everyone. That's why we offer personalized solutions
          tailored to meet the unique needs of each learner. Our expert trainers
          provide continuous guidance and mentoring to ensure that each learner
          reaches their full potential. With a commitment to excellence,
          innovation, and personalized service, we aspire to be the leading
          provider of training solutions in the digital age. Join us on this
          journey and let us help you unlock your potential.
        </p>
      </div>
      <div className="w-64 h-64 lg:mr-8    ">
         <Image
           src="/logo1.jpg"
           alt=""
           width={0}
           height={0}
           sizes="100vw"
           style={{ width: "100%", height: "auto"}}
        />
      </div>
    </div>
  );
};

export default Header;
