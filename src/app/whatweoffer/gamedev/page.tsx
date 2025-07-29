"use client";
import React from "react";
import { Footer } from "@/app/homeComponents";
import { Navbar } from "@/app/homeComponents/NavbarL";
import Header from "../components/Header";
import { FadeIn } from "../components/FadeIn";
import { CustomAccordion } from "../components/Accordion";
import { SlidingDiv } from "../components/SlidingDiv";
import { CarouselSingle } from "../components/CarouselSingle";
import { BulletList } from "../components/BulletList";
import { GameDevSection } from "../components/CoursesDetails/GameDevSection";

export default function page() {
  return (
    <>
      <Navbar />
      <Header Course={"Game Development"} />

      <FadeIn
        threshold={0.01}
        className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"
      >
        <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-center gap-6 sm:gap-8 lg:gap-8 xl:gap-10">
            {/* Video container */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
                <video
                  src="/cyber security.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/api/placeholder/400/600"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl">
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
               This 5-day workshop is a hands-on journey into game development with Unity, where students explore everything from 2D and 3D game design to character animation, scripting, and UI building. Each day introduces a new concept through practical labs and creative challenges.
              </p>
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                Designed for high school students (ages 14–18), the workshop takes place at NUST-SEECS and blends storytelling, coding, and design. It's a chance to get familiar with the tools and skills used in real-world game development and interactive media.
              </p>
            </div>
          </div>

          {/* Bullet points section */}
          <SlidingDiv
    direction={"top"}
    className="py-4 sm:py-6 md:py-8 lg:py-6 xl:py-8 mt-4 sm:mt-6 lg:mt-8"
  >
    <div className="max-w-4xl mx-auto">
      <BulletList
        contentClass="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700"
        list={[
          {
            title: "Day 1",
            content:
              "Introduction to the Unity Interface and interaction with its different modules",
          },
          {
            title: "Day 2",
            content:
              "Build a scene using different scene components and learn how to design UI in games",
          },
          {
            title: "Day 3",
            content:
              "Learn how to create gameplay using scripts and bring your games to life",
          },
          {
            title: "Day 4",
            content: "Build Your First 2D Game – From Concept to Playable Prototype"
          },
          {
            title: "Day 5",
            content: "Create a Basic 3D Game – Step into the Third Dimension"
          }
        ]}
      />
    </div>
  </SlidingDiv>
        </div>

        <CustomAccordion
          containerClass={"w-full"}
          items={[
            {
              title: "Course Details",
              id: "Course Details",
              content: <GameDevSection />,
            },
            {
              title: "Game Development At Your Place",
              id: "Game Development At Your Place",
              content: (
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv
                      direction={"left"}
                      className="sm:flex-[2_0_0] aspect-square bg-neutral-400"
                    >
                      <CarouselSingle
                        containerClass={"size-full"}
                        items={[
                          <img key={``} src="/SingleCarousel/gamedev/1.jpeg" className="size-full" />,
                        ]}
                        //     nextButton={
                        //     <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                        //       <CustomButton ouerColor={"blue-900"} innerColor={"#FFFFFF"}/>
                        //     </div>
                        //   }
                      />
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <h3 className="ttext-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">
                        Want this thrilling workshop conducted right at your school or institute?
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                        What we will provide:
                      </p>
                      <BulletList
                        contentClass="text-sm text-left md:text-base xl:text-lg"
                        list={[
                          {
                            title: "Complete workshop curriculum and content",
                          },
                          {
                            title: "Certified instructor and teaching assistants"
                          },
                          {
                            title:
                              "Unity project files, setup guides, and activity kits",
                          },
                          {
                            title: "On-site or hybrid delivery options",
                          },
                        ]}
                      />
                      <p>
                        {
                          "A great opportunity for schools and organizations to introduce students to the world of game design, coding, and interactive media — all without leaving campus."
                        }
                      </p>
                    </SlidingDiv>
                  </div>
                </div>
              ),
            },
          ]}
        />
        {/* </div> */}
      </FadeIn>
      <Footer />
    </>
  );
}
