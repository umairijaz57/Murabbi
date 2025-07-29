"use client";
import React from "react";
import { Footer, NavBar } from "@/app/homeComponents";
import { Navbar } from "@/app/homeComponents/NavbarL";
import Header from "../components/Header";
import { FadeIn } from "../components/FadeIn";
import { CustomAccordion } from "../components/Accordion";
import { SlidingDiv } from "../components/SlidingDiv";
import { CarouselSingle } from "../components/CarouselSingle";
import { BulletList } from "../components/BulletList";
import { JollySection } from "../components/CoursesDetails/JollySection";

export default function page() {
  return (
    <>
      <Navbar />
      <Header Course={"Jolly Phonics"} />

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
                  src="/jolly.mp4"
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
                Murabbi's Jolly Phonics Camp is a joyful early literacy adventure crafted for young learners aged 4 to 6. Using the trusted Jolly Phonics method, children build strong reading foundations through playful sound recognition, phonics games, and engaging group activities that spark curiosity and confidence.
              </p>
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                Set at NUST-SEECS, this 3-week camp blends literacy with fun in science, math, art, and sports. From glow-in-the-dark projects to sack races and phonics relays, each day offers new hands-on learning moments — all leading up to a grand celebration of their growth and creativity.
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
                title: "Week 1: Foundation & Fun",
              },
              {
                title: "Week 2: Exploration & Discovery",
              },
              {
                title: "Week 3: Mastery & Celebration",
              },
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
              content: <JollySection />,
            },
            {
              title: "Jolly Phonics At Your Place",
              id: "Jolly Phonics At Your Place",
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
                          <img key={``} src="/SingleCarousel/jolly/3.jpeg" className="size-full" />,
                        ]}
                        //     nextButton={
                        //     <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                        //       <CustomButton outerColor={"blue-900"} innerColor={"#FFFFFF"}/>
                        //     </div>
                        //   }
                      />
                    </SlidingDiv>
                    <SlidingDiv
                      direction={"right"}
                      className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                    >
                      <h3 className="ttext-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">
                        Want Murabbi's Jolly Phonics Camp at your school or center?
We bring the same joyful early literacy experience to your location — complete with phonics sessions, creative activities, and hands-on science and art projects, all tailored for your space and young learners.
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                        What we will provide:
                      </p>
                      <BulletList
                        contentClass="text-sm text-left md:text-base xl:text-lg"
                        list={[
                          {
                            title: "Complete 3-week camp plan and content",
                          },
                          {
                            title: "Trained phonics instructors and activity assistants",
                          },
                          {
                            title:
                              "Learning materials, craft kits, and science project supplies",
                          },
                          {
                            title: "Flexible on-site or hybrid delivery options",
                          },
                        ]}
                      />
                      <p>
                        {
                          "An ideal way for preschools and early learning centers to offer a rich, play-based literacy program without leaving their own classrooms."
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
