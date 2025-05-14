import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import news from "../../../utils/news.json";
const Hero = () => {
  const [showItem, setShowItem] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next slide index
      const nextSlide = showItem === 3 ? 1 : showItem + 1;
      setShowItem(nextSlide);
    }, 8000);

    // Clear the timeout when the component unmounts or showItem changes
    return () => clearTimeout(timer);
  }, [showItem]);

  return (
    <div
      className="m-auto   main-bg z-20    relative bg-no-repeat overflow-hidden "
      style={{
        position: "relative",
        backgroundImage: `url(${news[news.length - 2]?.Image})`,
        backgroundSize: "cover",
        backgroundPosition: `center top`,
      }}
    >
      <div className="absolute inset-0 bg-blue-600/70"></div>
      <div className="hero-content-main  h-full  bg-gradient-to-b  z-20 relative  overflow-hidden  flex flex-col lg:flex-row justify-evenly  items-center   ">
        <div className="flex flex-col justify-center  p-6 pt-8  gap-6  transition duration-500 lg:w-[65%] h-full mt-0 ">
          <div className="text-white border-l-4 border-blue-500 pl-2">
            TRENDING NOW
          </div>
          <div className="text-white font-bold text-4xl md:text-5xl   ">
            {news[news.length - 2]?.Title.split(" ").map((item, idx) => {
              if (item.includes("#"))
                return <span className="text-blue-500">{item.slice(1)} </span>;
              else return <> {item} </>;
            })}
          </div>
          <div>
            <Link
              className="md:pt-4"
              href={`/news/${news[news.length - 2]?._id}`}
            >
              <button className="py-3 px-4 md:px-6 flex flex-row justify-center items-center bg-blue-500  transition-all duration-500 text-base  font-semibold text-white p-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600  border-2 border-blue-500">
                <span>Read More</span>
                <BsArrowRightShort size={25} />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative lg:-bottom-2  h-[25rem] overflow-hidden sm:h-[30rem] rounded-lg  w-[90%] m-4 md:m-0 lg:mb-4 hidden lg:block  sm:w-[26rem]  "></div>
      </div>
    </div>
  );
};

export default Hero;
