"use client";
import { NewsDB } from "@/types/propsType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/onViewPort";
import news from "../../utils/news.json";

type Props = { home?: boolean };

async function getData() {
  return [...news].reverse();
}

const EventCard = ({ item }: { item: NewsDB }) => {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <Link
      href={item.Description === "string" ? `/news/stem` : `/news/${item._id}`}
      className={` transition transform duration-1000 w-full sm:w-[22rem] h-[30rem]  ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      }`}
    >
      <div
        ref={cardRef}
        className={`relative overflow-hidden rounded-md w-full h-full  duration-500 transform   z-30  group  hover:scale-105 transition  shadow-lg shadow-gray-300/40 hover:shadow-md bg-white hover:bg-blue-600 hover:shadow-gray-400/40   "
         cursor-pointer `}
      >
        <div
          className={`relative max-w-full rounded-t-md h-[15rem] overflow-hidden `}
        >
          <Image
            src={item.Image}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
          />
        </div>
        <div className="flex flex-col items-s tart gap-2 p-8">
          <div className="flex flex-row justify-between place-items-center w-full">
            <div className=" transition duration-500 font-bold text-sm  group-hover:text-white text-blue-500 ">
              {" "}
              {item.Date}
            </div>
          </div>
          <p
            className={`mt-4 text-base font-bold transition duration-500 group-hover:text-white`}
          >
            {item.Title.replace(/#/g, "")}
          </p>
          <div className="text-gray-600 font-bold text-sm group-hover:text-white">
            Read More
          </div>
        </div>
      </div>
    </Link>
  );
};

const Events = (props: Props) => {
  const [news, setNews] = useState<NewsDB[] | null>(null); // Use a state to hold the course data

  useEffect(() => {
    async function fetchNews() {
      const data = await getData();
      setNews(data);
    }

    fetchNews();
  }, []);

  return (
    <div>
      {" "}
      <div
        className={`flex flex-row flex-wrap m-auto gap-8 items-center justify-center overflow-y-hidden p-6 relative `}
      >
        {props.home ? (
          <>
            {news?.slice(0, 3).map((item: any, index: number) => (
              <>
                {index === 4 ? (
                  <EventCard
                    item={{
                      _id: "0",
                      Title:
                        "Murabbi Successfully Concludes Winter STEM Camp in Collaboration with NCLS, NUST, and Elements Learning! 🚀",
                      Image: "/news/0.JPG",
                      Link: "/news/stem",
                      Description: "string",
                      Date: "30 January, 2024",
                    }}
                  />
                ) : (
                  <EventCard key={index} item={item} />
                )}
              </>
            ))}
          </>
        ) : (
          <>
            {news?.map((item: any, index: number) => (
              <>
                {index === 4 ? (
                  <EventCard
                    item={{
                      _id: "0",
                      Title:
                        "Murabbi Successfully Concludes Winter STEM Camp in Collaboration with NCLS, NUST, and Elements Learning! 🚀",
                      Image: "/news/0.JPG",
                      Link: "/news/stem",
                      Description: "string",
                      Date: "30 January, 2024",
                    }}
                  />
                ) : (
                  <EventCard key={index} item={item} />
                )}
              </>
            ))}
          </>
        )}
      </div>
      {props.home ? (
        <div className="flex justify-center items-center mt-12">
          <Link href="/resources">
            <button className="py-3 px-6 w-36 md:mt-4 rounded-lg transition-all text-sm font-bold  duration-500 border-2 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 border-blue-600  ">
              {" "}
              View More
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Events;
