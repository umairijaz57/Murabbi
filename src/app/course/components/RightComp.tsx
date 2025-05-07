import courses from "@/app/data/courses";
import { CourseDB } from "@/types/propsType";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

type Props = { data: CourseDB | undefined };

const RightComp = (props: Props) => {
  const sectionRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const [isInView, setIsInView] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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

  const courseData = courses;

  return (
    <div className="flex flex-col gap-8 md:w-[35%] bg-white p-2 md:p-0 ">
      <div
        ref={sectionRefs[0]}
        className={`  ${
          isInView[0] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000 flex flex-col gap-4 text-center p-2 md:p-8 border-2 border-gray-400/20 shadow-md shadow-gray-400/10`}
      >
        <div className="w-40 h-40 bg-gray-400 m-auto rounded-full overflow-hidden relative">
          <Image
            src={props.data ? props.data?.Instructors[2] : ""}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="50% 30%"
            className="absolute w-full z-30"
          />
        </div>
        <div className="font-bold text-lg">{props.data?.Instructors[0]}</div>
        {/* <div className="text-base">Teacher/Master</div> */}
        <div className="text-base">{props.data?.Instructors[1]}</div>
        {/* <ul className="mx-auto flex list-inside justify-center">
          <Link
            className={` p-2 h-12 w-12 flex justify-center items-center  `}
            href=""
            target="_blank"
          >
            <FaLinkedinIn size={20} className="hover:text-blue-500" />
          </Link>
          <Link
            className={` p-2 h-12 w-12 flex justify-center items-center`}
            target="_blank"
            href=""
          >
            <FaEnvelope size={20} className="hover:text-blue-500" />
          </Link>
        </ul> */}
      </div>
      <Link
        href={
          props.data?.Title[0] ===
          "Web Wizardry: From HTML to React Mastery"
            ? "https://forms.gle/RU3pfRUxNjBEDybcA "
            : props.data?.Title[0] === "DevOps Fast Track"
            ? "https://docs.google.com/forms/d/e/1FAIpQLScEgfLDdT-utE_FNFIzq_qFd7TegLE0W3VbhwRFTKkbRw3Tyg/viewform"
            : `/register/${props.data?._id}-${props.data?.Title[0]}`
        }
      >
        <div
          ref={sectionRefs[5]}
          className={`  ${
            isInView[5]
              ? "translate-y-0 opacity-100"
              : "translate-y-40 opacity-0"
          }  transition duration-1000 flex flex-col gap-4 bg-blue-600 p-4 py-6 text-xl text-center   text-white cursor-pointer hover:bg-blue-500 border-2 border-gray-400/20 shadow-md shadow-gray-400/10`}
        >
          Register Now
        </div>
      </Link>
      <div
        ref={sectionRefs[1]}
        className={`  ${
          isInView[1] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000 flex flex-col gap-4 bg-gray-200 p-4  md:p-8 border-2 border-gray-400/20 shadow-md shadow-gray-400/10`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          Popular Course
        </div>
        {courseData?.slice(0, 3).map((item: any) => (
          <Link href={item.Link}>
            <div className="flex flex-row items-center gap-4 justify-start cursor-pointer p-2 hover:bg-gray-300/20">
              <div className="w-20 h-20 flex flex-row justify-center items-center">
                <Image
                  src={item.Image}
                  alt=""
                  height={60}
                  width={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="text-sm sm:text-base font-bold ">
                {item.Title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        ref={sectionRefs[2]}
        className={`  ${
          isInView[2] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000 flex flex-col gap-4 p-4  md:p-8 border-2 border-gray-400/20 shadow-md shadow-gray-400/10`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          Tags
        </div>
        <div className="flex flex-row justify-center gap-4 flex-wrap text-sm">
          {props.data?.Tags.map((item) => (
            <div className="px-4 py-2 text-gray-500 bg-gray-200 border-2 border-gray-400/20">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div
        ref={sectionRefs[3]}
        className={` ${
          isInView[3] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000 flex flex-col p-4 gap-4 bg-gray-200  md:p-8 border-2 border-gray-400/20 shadow-md shadow-gray-400/10`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          Follow Us
        </div>
        <ul className="mx-auto flex list-inside justify-center gap-4">
          <Link
            className={` p-2 h-12 w-12 flex justify-center items-center bg-gray-200 border-2 border-gray-400/20 `}
            href="https://www.linkedin.com/company/murabbi/"
            target="_blank"
          >
            <FaLinkedinIn size={20} className="hover:text-blue-500" />
          </Link>
          <Link
            className={` p-2 h-12 w-12 flex justify-center items-center bg-gray-200 border-2 border-gray-400/20 `}
            target="_blank"
            href="https://www.instagram.com/murabbi.io/"
          >
            <FaInstagram size={20} className="hover:text-blue-500" />
          </Link>
          <Link
            className={` p-2 h-12 w-12 flex justify-center items-center bg-gray-200 border-2 border-gray-400/20 `}
            target="_blank"
            href="http://facebook.com/murabbi.io"
          >
            <FaFacebook size={20} className="hover:text-blue-500" />
          </Link>
        </ul>
      </div>
      <div
        ref={sectionRefs[4]}
        className={`  ${
          isInView[4] ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000 flex flex-col gap-4 p-4  md:p-6 border-2 border-gray-400/20 shadow-md shadow-gray-400/10`}
      >
        <div className="text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 mb-4 ">
          Explore More
        </div>
        <Link href="/trainings/high">
          <div className="flex flex-row gap-4 cursor-pointer items-center justify-between  sm:p-2 hover:bg-gray-300/20">
            <div className="w-40 h-20 bg-gray-400 relative">
              <Image
                src="/hero/hightech.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="50% 30%"
                className="absolute w-full z-30"
              />
            </div>
            <div className="text-sm sm:text-base font-bold text-blue-600 w-[60%]">
              High Tech Trainings
            </div>
          </div>
        </Link>
        <Link href="/trainings/low">
          <div className="flex flex-row gap-4 cursor-pointer items-center justify-between  sm:p-2 hover:bg-gray-300/20">
            <div className="w-40 h-20 bg-gray-400 relative">
              <Image
                src="/hero/low-tech.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="50% 30%"
                className="absolute w-full z-30"
              />
            </div>
            <div className="text-sm sm:text-base font-bold  text-blue-600 w-[60%]">
              Low Tech Trainings
            </div>
          </div>
        </Link>
        <Link href="/trainings/summer-courses">
          <div className="flex flex-row gap-4 cursor-pointer items-center justify-between  sm:p-2 hover:bg-gray-300/20">
            <div className="w-40 h-20 bg-gray-400 relative">
              <Image
                src="/hero/summer.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="50% 30%"
                className="absolute w-full z-30"
              />
            </div>
            <div className="text-sm sm:text-base font-bold  text-blue-600 w-[60%]">
              Summer Schools
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightComp;
