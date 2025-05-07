"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/onViewPort";
import { CourseDB } from "@/types/propsType";
import courses from "../../utils/courses.json";
import Link from "next/link";

type Props = {
  page?: boolean;
  category?: string;
  subCategory?: string;
};

async function getData() {
  return courses;
}

const CourseCard = ({ course }: { course: CourseDB }) => {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <Link href={course.Link}>
      <div
        className={`transition transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } duration-1000`}
        ref={cardRef}
      >
        <div
          className={`flex flex-col group gap-2 items-start justify-start shadow-lg shadow-gray-600/10  cursor-pointer px-6 py-4 w-72 h-[360px] rounded-lg bg-white border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-gray-600/50 transition transform hover:-translate-y-2 duration-500`}
        >
          <div className="relative w-24 h-24 p-4 flex flex-row justify-center items-center bg-gray-200 group-hover:bg-gray-300/20  mb-2 rounded-full">
            <Image
              src={course.Image[0]}
              width={100}
              height={100}
              alt=""
              className={`filter  group-hover:brightness-200`}
            />
          </div>
          <div className=" text-xl md:text-2xl font-bold">
            {course.Title[0]}
          </div>
          <div className="text-base">{course.DescriptionShort}</div>
        </div>
      </div>
    </Link>
  );
};

const Courses = (props: Props) => {
  const [courses, setCourses] = useState<CourseDB[] | null>(null); // Use a state to hold the course data

  useEffect(() => {
    async function fetchCourses() {
      const data = await getData();
      setCourses(data);
    }

    fetchCourses();
  }, []);

  console.log(courses?.length);

  const desiredTitles = [
    "DevOps Fast Track",
    "AI Diploma",
    "Blockchain Course",
    "Cryptocurrencies And Blockchain",
  ];

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 overflow-hidden pb-4 md:py-4">
        {courses
          ?.filter((course: CourseDB) =>
            props.page
              ? course.Category === props.category
              : desiredTitles.includes(course.Title[0])
          )
          .sort((a: CourseDB, b: CourseDB) =>
            a.Title[0].localeCompare(b.Title[0])
          )
          .map((course: any, index: number) => (
            <CourseCard key={index} course={course} />
          ))}
      </div>
    </>
  );
};

export default Courses;