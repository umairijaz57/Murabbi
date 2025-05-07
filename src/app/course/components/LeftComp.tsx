import { CourseDB } from "@/types/propsType";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

type Props = { data: CourseDB | undefined };

const LeftComp = (props: Props) => {
  const sectionRefs = Array.from({ length: 5 }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const [isInView, setIsInView] = useState([false, false, false, false, false]);

  const handleIntersection =
    (index: number) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView((prev) => {
            const updatedVisible = [...prev];
            updatedVisible[index] = true;
            return updatedVisible;
          });
        }
      });
    };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    sectionRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        handleIntersection(index),
        options
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, []);

  return (
    <div className="flex flex-col p-2 md:p-0 gap-8 lg:gap-12 md:w-[60%] bg-white">
      <div
        ref={sectionRefs[0]}
        className={` w-full ${
          isInView[0] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000`}
      >
        <div className="relative h-0" style={{ paddingTop: "60%" }}>
          <Image
            src={props.data ? props.data.Image[1] : ""}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div
        ref={sectionRefs[1]}
        className={`${
          isInView[1] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } bg-gray-200 p-6 transition duration-1000`}
      >
        <div className="flex mb-2 text-left justify-start text-2xl  text-gray-900/90 font-extrabold transition duration-1000 ">
          {props.data?.Title[0]}
        </div>
        <div className="text-justify md:text-left text-gray-600 text-base sm:text-lg ">
          {props.data?.DescriptionMain}
        </div>
      </div>
      <div
        ref={sectionRefs[2]}
        className={`${
          isInView[2] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } transition duration-1000`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          Prequisites
        </div>
        <div className="flex flex-col gap-4 p-4">
          {props.data?.Prereq.map((item: any) => (
            <div className="flex items-start place-items-start gap-4 text-base sm:text-lg text-gray-900/90  group">
              <div className="w-6 h-6 p-1 text-blue-600 bg-gray-200 flex justify-center place-items-center   mt-1 cursor-pointer  transition duration-1000">
                <AiOutlineCheck className="w-8   " />
              </div>
              <span className="text-justify ">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={sectionRefs[3]}
        className={`${
          isInView[3] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          Course Details
        </div>
        <div className="bg-gray-200 text-base flex flex-col lg:flex-row gap-4 justify-between p-4 lg:p-8">
          <div className="flex flex-col gap-4 md:w-1/2 text-sm sm:text-base">
            <div className="flex flex-row justify-between gap-4 ">
              <div> Instructor: </div>
              <div className="font-semibold "> {props.data?.Details[0]}</div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Course Name: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[1]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Duration: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[2]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Course Level: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[3]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Target Audience: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[4]}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 text-sm sm:text-base">
            <div className="flex flex-row justify-between gap-4">
              <div> Language: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[5]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Lectures: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[6]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Regular Price: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[7]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Price Discount: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[8]}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div> Course Status: </div>
              <div className="font-semibold text-right">
                {" "}
                {props.data?.Details[9]}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sectionRefs[4]}
        className={`${
          isInView[4] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } transition duration-1000`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          What You'll Learn
        </div>
        <div className="flex flex-col gap-4 p-4">
          {props.data?.Learn.map((item: any) => (
            <div className="flex items-start place-items-start gap-4 text-base sm:text-lg text-gray-900/90  group">
              <div className="w-6 h-6 p-1 text-blue-600 bg-gray-200 flex justify-center place-items-center   mt-1 cursor-pointer  transition duration-1000">
                <AiOutlineCheck className="w-8   " />
              </div>
              <span className="text-justify ">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftComp;
