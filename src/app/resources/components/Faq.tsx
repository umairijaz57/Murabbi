"use client";
import useIntersectionObserver from "@/hooks/onViewPort";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {};
type Question = {
  isOpen: boolean;
  question: string;
  answer: string;
};

const initialQuestions: Question[] = [
  {
    isOpen: false,
    question: "What is Murabbi?",
    answer:
      "Murabbi is a dynamic startup that is reshaping the training industry through its innovative and personalized training approach. Our training programs are designed to enhance skills while catering to diverse interests and proficiency levels.",
  },
  {
    isOpen: false,
    question: "Are the instructors at Murabbi experienced?",
    answer:
      "Yes, Murabbi's instructors are academically competent individuals having doctorates in their respective fields. They are assistant professors at NUST, having years of teaching experience as well as notable achievements in academia, research, and entrepreneurship.",
  },
  {
    isOpen: false,
    question: "Who can benefit from Murabbi's AI diploma program?",
    answer:
      "The AI diploma program at Murabbi is designed to benefit individuals who possess a basic understanding of programming concepts and have a curiosity and passion for exploring the possibilities of AI.",
  },
  {
    isOpen: false,
    question: "How long is the AI diploma program?",
    answer:
      "The AI diploma program is designed to be completed in a duration of 4 months. It is carefully structured to provide comprehensive training through hands-on practical projects.",
  },
  {
    isOpen: false,
    question: "What are the timings of the classes for the AI diploma program?",
    answer:
      "The classes for the AI diploma program are held on Mondays and Tuesdays from 6 pm to 9 pm.",
  },
  {
    isOpen: false,
    question: "Where are the classes conducted for the AI diploma program?",
    answer:
      "The classes for the AI diploma program are conducted at SEECS (School of Electrical Engineering and Computer Science), NUST H-12, Islamabad.",
  },
  {
    isOpen: false,
    question:
      " Are there job placement opportunities for well-performing candidates in Murabbi's training programs?",
    answer:
      "Yes, students who excel in the training programs and demonstrate strong technical skills and/or leadership will be considered for job placement opportunities in our sister startups.",
  },
];

function Faq({}: Props) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [isOpen, setIsOpen] = useState(false);
  const [faqRef, isVisible] = useIntersectionObserver();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = (index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].isOpen = !updatedQuestions[index].isOpen;
    setQuestions(updatedQuestions);
  };
  return (
    <>
      <div ref={faqRef} >
        <div
          className={`flex flex-col-reverse items-start lg:flex-row lg:justify-between  p-2 md:p-0  duration-1000  opacity-0 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
          }`}
        >
          <div className="lg:text-left w-full lg:w-[60%] grid gap-5 ">
            <div>
              <div className="flex flex-col gap-4  justify-start mx-auto  px-1 w-full ">
                {questions.slice(0, 3).map((q, index) => (
                  <div key={index} className="mb-2 w-full">
                    <div
                      className={`shadow-md  flex justify-between p-4 mb-2 bg-white items-center gap-4 grow rounded-md`}
                    >
                      <h2 className="text-xl font-bold w-full ml-2">
                        {q.question}
                      </h2>
                      <div
                        className="w-16 flex justify-center items-center h-16 bg-gray-300/60 cursor-pointer rounded-lg "
                        onClick={() => handleToggle(index)} // Calculate the actual index
                      >
                        {q.isOpen ? (
                          <FiMinus size={30} className="text-gray-500/90" />
                        ) : (
                          <FiPlus size={30} className="text-gray-500/90" />
                        )}
                      </div>
                    </div>
                    {q.isOpen && (
                      <p
                        className="text-justify text-lg px-2 show-testimonial"
                        style={{
                          textAlign: "justify",
                          hyphens: "auto",
                          wordSpacing: "-0.5px",
                        }}
                      >
                        {q.answer}
                      </p>
                    )}
                    <hr className="text-white w-full" />
                  </div>
                ))}
                {/* <div className="text-black ">
                    <div className="flex justify-between  p-4 mb-2 bg-white items-center ">
                      <h2 className="text-xl md:text-2xl font-bold  w-full ">
                        What is Murabbi?
                      </h2>
                      <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                    </div>
                    <p
                      className=" text-justify text-lg px-2"
                      style={{
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      Murabbi is a dynamic startup that is reshaping the training
                      industry through its innovative and personalized training
                      approach. Our training programs are designed to enhance
                      skills while catering to diverse interests and proficiency
                      levels.
                    </p>
                  </div>
                  <hr className="text-white w-full" />
                  <div className="text-black ">
                    <div className="flex justify-between d p-4 mb-2 bg-white items-center ">
                      <h2 className="text-xl md:text-2xl font-bold  w-full ">
                        Are the instructors at Murabbi experienced?
                      </h2>
                      <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                    </div>
                    <p
                      className=" text-justify text-lg px-2"
                      style={{
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      Yes, Murabbi's instructors are academically competent
                      individuals having doctorates in their respective fields.
                      They are assistant professors at NUST, having years of
                      teaching experience as well as notable achievements in
                      academia, research, and entrepreneurship.
                    </p>
                  </div>
                  <hr className="text-white w-full" />
                  <div className="text-black ">
                    <div className="flex justify-between d p-4 mb-2 bg-white items-center ">
                      <h2 className="text-xl md:text-2xl font-bold  w-full ">
                        Who can benefit from Murabbi's AI diploma program?
                      </h2>
                      <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                    </div>
                    <p
                      className=" text-justify text-lg px-2"  
                      style={{
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      The AI diploma program at Murabbi is designed to benefit
                      individuals who possess a basic understanding of programming
                      concepts and have a curiosity and passion for exploring the
                      possibilities of AI.
                    </p>
                  </div>
                  <hr className="text-white w-full" /> */}
                {!isOpen && (
                  <button
                    className="bg-blue-600 w-36 py-3 px-6  text-sm font-semibold text-white p-2 rounded-lg transition duration-500 hover:bg-blue-500 border-2  hover:border-blue-500 border-blue-600"
                    onClick={handleOpen}
                  >
                    {isOpen ? "Close" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-[20rem] mx-auto mb-6   md:w-[70%]  lg:w-[40%] md:h-[38rem] relative lg:-top-[12rem]  lg:mb-0 lg:mx-0 overflow-hidden">
            <Image
                src="/faq-new.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover"
                style={{ width: "100%", height: "100%"  }}
              />
          </div>
        </div>
        <div
          className={`lg:text-left mt-2 lg:mt-12 transition-all duration-500 grid gap-5 ${
            isOpen
              ? "h-auto transition-all duration-500 max-h-full"
              : "h-0 max-h-0"
          } overflow-hidden relative lg:-top-[10rem] `}
        >
          <div>
            <div className="flex flex-col  gap-4     justify-start mx-auto px-1">
              {questions.slice(3, 7).map((q, index) => (
                <div key={index} className="mb-2  ">
                  <div
                    className={`flex shadow-md  justify-between p-4 mb-2 bg-white lg:w-[95%] items-center gap-4 rounded-md`}
                  >
                    <h2 className="text-xl  font-bold w-full ml-2">
                      {q.question}
                    </h2>
                    <div
                      className="w-16 flex justify-center items-center h-16 bg-gray-300/60 cursor-pointer rounded-lg "
                      onClick={() => handleToggle(index + 3)} // Calculate the actual index
                    >
                      {q.isOpen ? (
                        <FiMinus size={30} className="text-gray-500/90" />
                      ) : (
                        <FiPlus size={30} className="text-gray-500/90" />
                      )}
                    </div>
                  </div>
                  {q.isOpen && (
                    <p
                      className="text-justify text-lg px-2 show-testimonial"
                      style={{
                        textAlign: "justify",
                        hyphens: "auto",
                        wordSpacing: "-0.5px",
                      }}
                    >
                      {q.answer}
                    </p>
                  )}
                  <hr className="text-white w-full" />
                </div>
              ))}
              {/* <div className="text-black ">
                <div className="flex justify-between d p-4 mb-2 bg-white items-center ">
                  <h2 className="text-xl md:text-2xl font-bold  w-full ">
                    How long is the AI diploma program?
                  </h2>
                  <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                </div>
                <p
                  className="text-justify text-lg px-2"
                  style={{
                    textAlign: "justify",
                    hyphens: "auto",
                    wordSpacing: "-0.5px",
                  }}
                >
                  The AI diploma program is designed to be completed in a
                  duration of 4 months. It is carefully structured to provide
                  comprehensive training through hands-on practical projects.
                </p>
              </div>
              <hr className="text-white w-full" />
              <div className="text-black ">
                <div className="flex justify-between d p-4 mb-2 bg-white items-center ">
                  <h2 className="text-xl md:text-2xl font-bold w-full ">
                    What are the timings of the classes for the AI diploma
                    program?
                  </h2>
                  <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                </div>
                <p
                  className="text-justify text-lg px-2"
                  style={{
                    textAlign: "justify",
                    hyphens: "auto",
                    wordSpacing: "-0.5px",
                  }}
                >
                  The classes for the AI diploma program are held on Mondays and
                  Tuesdays from 6 pm to 9 pm.
                </p>
              </div>
              <hr className="text-white w-full" />
              <div className="text-black ">
                <div className="flex justify-between d p-4 mb-2 bg-white items-center ">
                  <h2 className="text-xl md:text-2xl font-bold  w-full ">
                    Where are the classes conducted for the AI diploma program?
                  </h2>
                  <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                </div>
                <p
                  className="text-justify text-lg px-2"
                  style={{
                    textAlign: "justify",
                    hyphens: "auto",
                    wordSpacing: "-0.5px",
                  }}
                >
                  The classes for the AI diploma program are conducted at SEECS
                  (School of Electrical Engineering and Computer Science), NUST
                  H-12, Islamabad.
                </p>
              </div>
              <hr className="text-white w-full" />
              <div className="text-black ">
                <div className="flex justify-between d p-4 mb-2 bg-white items-center ">
                  <h2 className="text-xl md:text-2xl font-bold  w-full ">
                    Are there job placement opportunities for well-performing
                    candidates in Murabbi's training programs?
                  </h2>
                  <div className="w-24 h-20 bg-gray-300/60 cursor-pointer"></div>
                </div>
                <p
                  className="text-justify text-lg px-2"
                  style={{
                    textAlign: "justify",
                    hyphens: "auto",
                    wordSpacing: "-0.5px",
                  }}
                >
                  Yes, students who excel in the training programs and
                  demonstrate strong technical skills and/or leadership will be
                  considered for job placement opportunities in our sister
                  startups.
                </p>
              </div>
              <hr className="text-white w-full" /> */}
            </div>
            {isOpen && (
              <button
                className=" m-auto mt-4 text-white  rounded-full flex justify-center place-items-center"
                onClick={handleOpen}
              >
                <AiOutlineUp
                  className="text-blue-600/70 hover:text-blue-600"
                  size={70}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
