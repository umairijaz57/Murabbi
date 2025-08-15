"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useIntersectionObserver from "../../hooks/onViewPort";

// Testimonials data constant
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dr. Javed Ashraf",
    title: "Associate Professor IMDC",
    image: "/testimonial/Javed.jpg",
    message: "I recently completed my PhD in Oral Public Health from Finland and returned to NED University as an instructor. During my PhD, I began exploring data science and AI, igniting a desire to learn more about the field. In May, I discovered Murabbi's AI course at NUST, which fascinated me. Since May 2023, I have been a part of this exceptional course, and my experience has been remarkable. The instructors excel in explaining content to individuals without a mathematical background. The course provides a solid grasp and understanding of AI concepts. I highly recommend it to anyone interested in delving into the world of AI."
  },
  {
    id: 2,
    name: "Frank Ekeng Henshaw",
    title: "AIESEC exchange student",
    image: "/testimonial/Frank.jpg",
    message: "I am currently an AIESEC exchange participant from Nigeria, pursuing a Professional Diploma in AI at NUST Islamabad. It was through a friend, also doing a fellowship here, that I discovered this program. His encouragement fueled my curiosity and interest in the ever-evolving AI markets. The registration process was smooth, thanks to the assistance provided by the International Student Board Office. So far, the course has been progressing well. The lecturers deserve commendation for their exceptional job in ensuring that everyone, including those without a technical background, can follow along. I believe this program will play a vital role in shaping my future endeavors."
  },
  {
    id:3,
    name:"IBRAR AHMED",
    title:"Student's Parents",
    image:"/testimonial/p1.jpg",
    message:"The initative taken by murabbi for the betterment of the future generation. I'm very pleased with the overall curriculum design and hands on experience nurturing the minds of the young ones overall satisfied"
  },
  {
    id:4,
    name:"Xiao Keti",
    title:"Student's Parents",
    image:"/testimonial/p2.jpg",
    message:"The summer camp initiative by murabbi as a great success in my experience for the learning of the children were given. Hope to join them soon again"
  },
  {
    id:5,
    name:"M. Ammar Nasir",
    title:"Game Development's Student",
    image:"/testimonial/s1.jpg",
    message:"The game development course was really spot on and we learned all kinds of new thing from the basic of game development on unity to advanced rendering and execution. A really great exprience"
  }
];

// Section content constant
const SECTION_CONTENT = {
  badge: "TESTIMONIALS",
  title: "What They Say About Us",
  subtitle: "Explore the insights and stories shared by our valued learners."
};

type Props = {
  testimonials?: typeof TESTIMONIALS_DATA;
  sectionContent?: typeof SECTION_CONTENT;
};

const Testimonials = ({ 
  testimonials = TESTIMONIALS_DATA, 
  sectionContent = SECTION_CONTENT 
}: Props) => {
  const [showItem, setShowItem] = useState<number>(1);
  const [left, isLInView] = useIntersectionObserver();

  const handlePrevious = () => {
    if (showItem === 1) {
      setShowItem(testimonials.length);
    } else {
      setShowItem(showItem - 1);
    }
  };

  const handleNext = () => {
    if (showItem === testimonials.length) {
      setShowItem(1);
    } else {
      setShowItem(showItem + 1);
    }
  };

  return (
    <div className="p-8 md:p-16">

    <div
      ref={left}
      className={`${
        isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      }  transition duration-1000 flex flex-col p-4 lg:p-0 lg:flex-row gap-8 md:gap-12 items-center lg:gap-[5%]  justify-center py-4  overflow-hidden `}
    >
      <div
        className={` flex flex-col gap-4 transition duration-500 text-justify md:text-left  `}
      >
        <div className="text-xl md:text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 md:mb-4 ">
          {sectionContent.badge}
        </div>
        <div className="text-3xl md:text-4xl text-left text-blue-600 font-extrabold md:mb-4 ">
          {sectionContent.title}
        </div>
        <div className="text-lg text-gray-600 ">
          {sectionContent.subtitle}
        </div>

        <div className="flex flex-row items-center mt-4 gap-12">
          <div>
            <AiOutlineLeft
              size={30}
              className="text-blue-500 cursor-pointer"
              onClick={handlePrevious}
            />
          </div>
          <div>
            <AiOutlineRight
              onClick={handleNext}
              size={30}
              className="text-blue-500 font-bold cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className={` flex flex-col md:flex-row  gap-[10%] justify-evenly items-center lg:w-[120%] bg-blue-600 p-6 lg:py-12 rounded-xl transition-all duration-500  ${
            showItem === testimonial.id ? "show-testimonial" : " hidden"
          }   `}
        >
          <div className="w-64 h-80 overflow-clip rounded-lg  mt-8 sm:mt-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 10%",
              }}
            />
          </div>
          <div className="flex flex-col  items-start justify-between md:w-[60%] ">
            <svg
              className="h-12 text-white"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <div className="text-base text-white">
              {testimonial.message}
            </div>

            <div className="text-lg mt-2 font-semibold text-gray-200">
              <span className="font-extrabold">{testimonial.name}</span>, {testimonial.title}
            </div>
          </div>
        </div>
      ))}
    </div>
                </div>
  );
};

export default Testimonials;