"use client";
import ConfirmModal from "@/app/register/thanku";
import useIntersectionObserver from "@/hooks/onViewPort";
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

type Props = {};

const NewsLetter = (props: Props) => {
  const [leftRef, isLInView] = useIntersectionObserver();
  const [rightRef, isRInView] = useIntersectionObserver();
  const [show, setShow] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  // State variables for radio buttons and email input
  const [selectedOption, setSelectedOption] = useState<string>(""); // Initialize with an empty string
  const [email, setEmail] = useState<string>("");

  // Handle radio button changes
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onCancel = () => {
    // Hide the modal
    setShow(false);
  };

  const validateForm = () => {
    let valid = true;
    let firstError = null;

    // Validation logic for each field
    const nameRegex = /^[A-Za-z]+$/; // Only letters allowed for names
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    const phoneRegex = /^(\+?\d{1,4})?[-.\s]?\d{10}$/; // Allows optional country code prefix

    if (email.trim() === "") {
      firstError = "Email required";
      valid = false;
    } else if (selectedOption === "") {
      firstError = "Updates must be selected";
      valid = false;
    }

    setErrors(firstError);
    return valid;
  };
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Do something with selectedOption and email, e.g., send a request to subscribe
    if (validateForm()) {
      try {
        const response = await fetch("https://formspree.io/f/xlekqwqr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "NewsLetter",
            email: email,
            updates: selectedOption,
          }),
        });
        if (response.ok) {
          // Show success message or reset the form
          setShow(true);
        } else {
          setErrors("Error Contacting");
          setShow(true);
        }
      } catch (error) {
        setErrors("Error Sending Email");
        setShow(true);
      }
    } else {
      setShow(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center   justify-center  overflow-hidden relative  ">
      <div
        ref={rightRef}
        className={` ${
          isRInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        } flex flex-col gap-4 transition duration-1000 text-justify md:text-left p-4  lg:p-4 lg:w-[55%] relative opacity-0 z-20  `}
      >
        <div className=" border-l-2 border-black font-bold pl-2">
          OUR NEWSLETTER
        </div>
        <div className="text-3xl md:text-4xl text-center md:text-left text-gray-900/90 font-extrabold md:mb-4 ">
          Get Our Every Single
          <span className="text-blue-600"> Notifications</span>
        </div>
        <div className="text-lg text-gray-600 ">
          Stay in the loop with Murabbi's newsletter. Be the first to hear about
          exciting course offerings, educational articles, and industry news,
          all curated for your learning journey.
        </div>
        <div className="flex flex-row justify gap-8 md:gap-16 mt-4 ">
          <div className="flex items-center space-x-2 cursor-pointer font-bold text-sm">
            <input
              onChange={handleRadioChange}
              type="radio"
              name="gender"
              value="male"
              className="h-4 w-4 rounded-full border-gray-300 focus:ring-0"
            />
            <span>Regular Updates</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer font-bold text-sm">
            <input
              onChange={handleRadioChange}
              type="radio"
              name="gender"
              value="female"
              className="h-4 w-4 rounded-full border-gray-300 focus:ring-0"
            />
            <span>Weekly Updates</span>
          </div>
        </div>

        <div className=" relative lg:w-[110%] lg:mt-4 lg:-left-[12rem] lg:bottom-0 z-40 rounded-lg bg-gray-200 flex flex-col md:flex-row  justify-between gap-8 md:gap-4 items-center border-[1.2rem] py-4 px-6 border-white  ">
          <div className="flex flex-col md:flex-row items-center  gap-8 md:gap-4 w-full">
            <div>
              <FaEnvelope className="text-blue-600" size={40} />
            </div>
            <div className="w-full">
              <input
                onChange={handleEmailChange}
                type="email"
                className="bg-gray-300/50 h-full rounded-lg  focus:outline-none focus:ring-0 p-4 w-full "
                placeholder="Enter Your Email Address"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="py-3 px-6 w-36  rounded-lg transition-all text-sm font-bold duration-500 border-2 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 border-blue-600 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        ref={leftRef}
        className={`opacity-0 h-[20rem] m-auto w-[90%] 2 transition duration-1000 overflow-hidden relative z-10  lg:w-[28rem] md:h-[28rem]   ${
          //30rem
          isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  `}
      >
        <Image
          src="/our-newsletter.jpg"
          alt=""
          layout="fill"
          style={{ objectFit: "cover", objectPosition: "0% -10%" }}
          className="relative w-full z-10    "
        />
      </div>
      <ConfirmModal
        isOpen={show}
        onCancel={onCancel}
        error={errors}
        newsletter
      />
    </div>
  );
};

export default NewsLetter;

{
  /* <div className="absolute top-[30%] -left-[1rem] md:-left-[2rem] h-52 w-52 rounded-full bg-gray-300/60 animation-about"></div>
<div className="absolute top-[10%] hidden md:block -right-[3rem] h-64 w-64 rounded-full z-10 bg-gradient-to-br from-gray-200 to-gray-300/40 "></div>
<div className="absolute top-[30%] hidden md:block -right-[2rem] h-8 w-32 rounded-tl-[6rem] rounded-tr-[8rem] rounded-bl-[2rem] rounded-br-[16rem] z-20 bg-gradient-to-br bg-gray-200 animation-about"></div>
<div className="absolute bottom-[25%] -right-[4rem] h-12 w-12 rounded-tl-[6rem] rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-[4rem] bg-gray-300/40 animation-about"></div>
<div className="absolute bottom-[10%] -right-[1.5rem] h-20 w-20 rounded-tr-[3rem] rounded-br-[1.5rem] bg-gray-200 animation-about"></div> */
}
