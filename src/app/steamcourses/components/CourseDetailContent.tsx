"use client"
import Link from "next/link"
import { useState } from "react"
import { BulletList } from "./BulletList"
import { CarouselSingle } from "./CarouselSingle"
import { SlidingDiv } from "./SlidingDiv"
import { CustomButton } from "./CustomBtn"
import Image from "next/image"


export const CourseDetailContent = () => {
  const [opened, setOpened] = useState<"ROBOTICS" | "CYBER SECURITY" | "ARTIFICIAL INTELEGENCE">("ROBOTICS")

  const texts = {
    "ROBOTICS": <>
      <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">Our robotics course introduces students to the exciting world of engineering and automation using LEGO V3 kits. Through fun and interactive projects, kids learn to build, program, and control their own robots.</h3>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">Each session blends creativity with technical skills — teaching the basics of sensors, movement, and logic in a way that's playful and age-appropriate. By the end, students feel confident as young engineers ready to solve real-world problems.</p>
    </>,
    "CYBER SECURITY": <>
      <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">This course blends history and technology to introduce kids to the world of cybersecurity. They discover how people like Leonardo da Vinci used clever hiding techniques — and how those ideas connect to modern digital security.</h3>
      <div className="pl-12 md:pl-24 lg:pl-32 xl:pl-40">
        <BulletList contentClass="text-sm text-left md:text-base xl:text-lg"
        list={[
          {title: "Learn classic and modern hiding techniques"},
          {title: "Discover secret writing and historical encryption"},
          {title: "Explore how cybersecurity protects us today"},
        ]} />
      </div>
    </>,
    "ARTIFICIAL INTELEGENCE": <>
      <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">In ARTIFICIAL INTELLIGENCE course, students explore the world of Artificial Intelligence through fun, beginner-friendly activities like face recognition and interactive games — inspired by platforms like Machine Learning for Kids.</h3>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">Each session blends creativity with technical skills — teaching the basics of sensors, movement, and logic in a way that's playful and age-appropriate. By the end, students feel confident as young engineers ready to solve real-world problems.</p>
    </>
  }

  const contents = {
    "ARTIFICIAL INTELEGENCE": <>
      <CarouselSingle containerClass={"size-full"} items={[
          <Image alt="" width={10000} height={1000} src={"/steamgallery/ai/1.jpg" } />,
          <Image alt="" width={10000} height={1000} src={"/steamgallery/ai/2.jpg" } />,
          <Image alt="" width={10000} height={1000} src={"/steamgallery/ai/3.jpg" } />,
      ]}
      nextButton={
        <div className="size-10 lg:size-16 pr-2 xs:pr-0 flex item-center justify-center">
          <CustomButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
        </div>
      } />
    </>,

    "CYBER SECURITY": <>
      <CarouselSingle containerClass={"size-full"} items={[
          <Image alt="" width={10000} height={1000} src={"/steamgallery/cybersec/1.jpg" } />,
          <Image alt="" width={10000} height={1000} src={"/steamgallery/cybersec/2.jpg" } />,
          <Image alt="" width={10000} height={1000} src={"/steamgallery/cybersec/3.jpg" } />,
      ]}
      nextButton={
        <div className="size-10 lg:size-16 pr-2 xs:pr-0 flex item-center justify-center">
          <CustomButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
        </div>
      } />
    </>,

    "ROBOTICS": <>
      <CarouselSingle containerClass={"size-full"} items={[
        <video src="/video.mp4" autoPlay loop muted></video>,
         <Image alt="" width={10000} height={1000} src={"/steamgallery/robotics/1.jpg" } />,
         <Image alt="" width={10000} height={1000} src={"/steamgallery/robotics/2.jpg" } />,
         <Image alt="" width={10000} height={1000} src={"/steamgallery/robotics/3.jpg" } />,
      ]}
      nextButton={
        <div className="size-10 lg:size-16 pr-2 xs:pr-0">
          <CustomButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"} />
        </div>
      } />
    </>,

  }

  // Get the two courses that are not currently opened
  const getOtherCourses = () => {
    const allCourses = ["ROBOTICS", "CYBER SECURITY", "ARTIFICIAL INTELEGENCE"] as const
    return allCourses.filter(course => course !== opened)
  }

  const otherCourses = getOtherCourses()

  return (
    <div className="p-2 xs:p-4 md:p-6 lg:p-8">
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <SlidingDiv direction={"top"} className="flex-[3_0_0] flex flex-col text-right p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 bg-[#F3EEE8]">
          {texts[opened]}
          <SlidingDiv direction={"bottom"} className="flex gap-2 mt-auto justify-end">
            <button 
              onClick={() => setOpened(otherCourses[0])} 
              className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-blue-900"
            >
              {otherCourses[0]}
            </button>
            <button 
              onClick={() => setOpened(otherCourses[1])} 
              className="lg:px-6 lg:py-4 p-2 font-bold md:text-lg lg:text-lg text-white bg-[#353535]"
            >
              {otherCourses[1]}
            </button>
          </SlidingDiv>
        </SlidingDiv>
        <SlidingDiv direction={'right'} className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400">
          {contents[opened]}
        </SlidingDiv>
      </div>
    </div>
  )
}