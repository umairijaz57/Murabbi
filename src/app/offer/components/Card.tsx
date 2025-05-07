"use client";
import Link from "next/link";
import { Offer } from "@/types/propsType";
import useIntersectionObserver from "@/hooks/onViewPort";
import { GiTeacher } from "react-icons/gi";
import { SiHiveBlockchain, SiTaichigraphics } from "react-icons/si";
import { MdScience } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

interface Card {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  home: boolean;
  index: number;
}

const Card = (props: Card) => {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <Link href={props.link}>
      <div
        ref={cardRef}
        className={`relative rounded-lg  duration-500 transform py-6 px-4 mt-20 group sm:w-[22rem] h-[28rem] flex flex-col justify-center place-items-center items-center   hover:scale-105 transition ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        } ${
          props.home
            ? "bg-white shadow shadow-gray-300 hover:shadow-md hover:shadow-gray-300  "
            : "hover:bg-blue-600 bg-white shadow-lg shadow-gray-300/60 hover:shadow-gray-600/50 border border-gray-400/20   "
        } cursor-pointer group`}
      >
        <div className=" -top-[4.5rem] absolute w-40 h-40 p-4 flex flex-row justify-center items-center bg-white border-4 border-gray-200 group-hover:border-blue-600 transition duration-500 shadow-md shadow-gray-300/40 group-hover:shadow-blue-600 mb-2 rounded-full">
          {props.title === "High Tech Training" && (
            <SiHiveBlockchain size={80} className="text-blue-600" />
          )}
          {props.title === "Low Tech Training" && (
            <SiTaichigraphics size={80} className="text-blue-600" />
          )}
          {props.title === "Summer Schools" && (
            <MdScience size={80} className="text-blue-600" />
          )}
          {props.title === "Workshops" && (
            <GiTeacher size={80} className="text-blue-600" />
          )}
        </div>
        <div className="h-full flex flex-col gap-4 justify-center mt-8">
          <h3
            className={`mb-2 pb-2 text-xl md:text-2xl  text-center  font-bold transition duration-500  text-blue-600 ${
              props.home ? "" : "group-hover:text-white"
            }`}
          >
            {props.title}
            <hr className="w-[60%] text-blue-600 border-2 border-blue-600 m-auto mt-2 group-hover:border-blue-500" />
          </h3>
          <p
            className={`mb-4 text-base text-center transition duration-500 ${
              props.home ? "" : "group-hover:text-white"
            }`}
          >
            {props.description}
          </p>
          <div className="absolute -bottom-6 righ-[35%] sm:right-[35%] p-2 px-4 rounded-md group-hover:bg-blue-500 bg-blue-600 transition duration-500 border-2 border-blue-600">
            <button className="  text-sm duration-500 text-white ">
              {" "}
              View More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CardContainer = ({
  offers,
  home,
}: {
  offers: Offer[];
  home?: boolean;
}) => {
  return (
    <div
      className={`flex flex-row flex-wrap justify-center items-center    gap-8  lg:gap-8 `}
    >
      {offers?.map((offer, index) => {
        return (
          <Card
            link={offer.Link}
            imageUrl={offer.Image}
            title={offer.Title}
            description={offer.Description}
            key={offer.id}
            home={home ? true : false}
            index={index}
          />
        );
      })}
      {/* {!home ? (
        <Image
          className="absolute top-[2rem] animation-offer right-[2rem] hidden md:block "
          src="/logo.png"
          alt=""
          height={120}
          width={120}
        />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default CardContainer;
