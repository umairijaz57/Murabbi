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
import { RoboticsSection } from "../components/CoursesDetails/RoboticsSection";
import { SteamCampSection } from "../components/CoursesDetails/SteamCampSection";

export default function page() {
  return (
    <>
      <Navbar />
      <Header Course={"Steam Camp"} />

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
                  src="/videosq.mp4"
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
                Murabbi presents an exciting 3-week STEAM Camp designed for high school students to explore the perfect blend of creativity, innovation, and future-ready skills. From programming robots and building AI models to unlocking the secrets of cybersecurity and exploring artistic expression — this camp offers a rich, hands-on experience like no other.
              </p>
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                This immersive camp is crafted to spark curiosity, develop practical skills, and inspire students to discover where their passions and future careers may align — all in a collaborative and engaging learning environment.
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
            title: "Week 1: Robotics & Computer Vision",
          },
          {
            title: "Week 2: Cybersecurity & Digital Defense",
          },
          {
            title: "Week 3: Artificial Intelligence & Innovation",
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
              content: <SteamCampSection />,
            },
            {
              title: "Steam Camp At Your Place",
              id: "Steam Camp At Your Place",
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
                          <img key={``} src="/1.jpg" className="size-full" />,
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
                        Want to bring Murabbi’s dynamic STEAM Camp to your own school or institute? We offer a fully organized, on-site version of the camp, delivering the same high-energy, multi-disciplinary learning experience at your location — tailored to your schedule and space.
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                        What we will provide:
                      </p>
                      <BulletList
                        contentClass="text-sm text-left md:text-base xl:text-lg"
                        list={[
                          {
                            title: "Full 3-week STEAM curriculum and daily activity plans"
                          },
                          {
                            title: "Instructors and assistants for each discipline (tech + arts)",
                          },
                          {
                            title:
                              "Equipment, project kits, and learning materials",
                          },
                          {
                            title: "Creative supplies for calligraphy and art modules",
                          },
                        ]}
                      />
                      <p>
                        {
                          "Empower your students with hands-on exposure to future-forward fields like robotics, AI, cybersecurity, and creative arts — all without leaving the comfort of your campus."
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
