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
        s{" "}
        {props.home ? (
          <>
            {news?.slice(0, 3).map((item: any, index: number) => (
              <>
                <EventCard key={index} item={item} />
              </>
            ))}
          </>
        ) : (
          <>
            {/* {news?.map((item: any, index: number) => (
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
                ) :
                 (
                <EventCard key={index} item={item} />
                )}
              </>
            ))} */}

            {/* {
                "_id": "6572b40e410c5fef99f25c4a",
                "Title": "STEM CAMP 2023: Igniting Minds, Powering Futures",
                "Image": "/news/stem.png",
                "Description": "Murabbi, a cutting-edge tech startup, in collaboration with Elements Learning, and NCLS&C, is set to host an exhilarating event, the STEM Camp, at the prestigious NUST Campus. This immersive experience promises a dynamic fusion of science, math, AI, robotics, and game development, creating a STEM Wonderland for young minds. </br> Our mission is to empower students with the skills and mindset crucial for 21st-century success. The workshop utilizes interactive coding to deepen understanding in math and science, offering personalized training based on individual interests. </br> <span class=\"font-extrabold\" >Key Event Details:</span> </br> <span class=\"font-bold\" >Duration:</span> 5 Days </br> <span class=\"font-bold\" >Timings:</span> 9:30 am to 1:00 pm (Morning Session), 2:00 pm to 4:00 pm (Afternoon Session) </br> <span class=\"font-bold\">Target Audience: </span>Ages 8-18 (School and College Students)</br><span class=\"font-bold\">Venue: </span>NCLS (NUST)</br>Our program stands out with prestigious accreditation from STEM.org, a testament to its recognized quality in the field. Boasting an impressive rating of 4.6 out of 5 by both students and parents, our workshop has consistently garnered positive feedback, due to its effectiveness and impact. The curriculum follows the innovative BIDE model, designed to be Broad, Inspiring, Deep, and Efficient, ensuring a comprehensive and efficient learning experience. With a targeted focus on STEAM subjects—Science, Technology, Engineering, Arts, and Math—participants delve into a well-rounded exploration of diverse disciplines, fostering a holistic approach to education. </br> With Murabbi's STEM Workshop, you get to engage in dynamic activities designed to foster a genuine passion for STEM subjects. You can benefit from the expertise of industry leaders, gaining valuable insights from seasoned professionals in the field. Furthermore, you get to go beyond traditional learning methods and develop skills that extend past textbooks, nurturing your creativity and innovation. More importantly, you can equip yourself with essential future-ready skills, exploring the realms of AI, robotics, and game development. This immersive experience not only broadens your knowledge but also enhances analytical and structural thinking abilities, providing a well-rounded foundation for future success. </br>",
                "Date": "8 December 2023",
                "Link": ""
              },                             this data is from news.json */}

            {/* render all new through normal behave */}

            {news?.map((item: any, index: number) => (
              <EventCard key={index} item={item} />
            ))}
          </>
        )}
      </div>
      {props.home ? (
        <div className="flex justify-center items-center mt-12">
          <Link href="/news">
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
