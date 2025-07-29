"use client";
import Image from "next/image";
import Link from "next/link";
import courses from "../../utils/courses.json";

type Course = {
  Title: string[];
  Image: string[];
  DescriptionShort: string;
  Link: string;
};

type Props = {
  course: Course;
};

const CourseCard = ({ course }: Props) => {
  return (
    <Link href={course.Link}>
      <div className="flex flex-col group gap-2 items-start justify-start shadow-lg shadow-gray-600/10 cursor-pointer px-6 py-4 w-72 h-[360px] rounded-lg bg-white border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-gray-600/50 transition transform hover:-translate-y-2 duration-500">
        <div className="relative w-24 h-24 p-4 flex flex-row justify-center items-center bg-gray-200 group-hover:bg-gray-300/20 mb-2 rounded-full">
          <Image
            src={course.Image[0]}
            width={100}
            height={100}
            alt=""
            className="filter group-hover:brightness-200"
          />
        </div>
        <div className="text-xl md:text-2xl font-bold">
          {course.Title[0]}
        </div>
        <div className="text-base">{course.DescriptionShort}</div>
      </div>
    </Link>
  );
};

const Courses = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-8 overflow-hidden pb-4 md:py-4">
      {courses.map((course: Course, index: number) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default Courses;