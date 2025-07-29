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
import { CyberSecuritySection } from "../components/CoursesDetails/CyberSecuritySection";
import { ArtificialIntelligenceSection } from "../components/CoursesDetails/ArtificialIntelligenceSection";

export default function page() {
  return (
    <>
      <Navbar />
      <Header Course={"Artifical Intelligence"} />

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
                Murabbi is bringing a thrilling 5-day hands-on workshop into the exciting world of Artificial Intelligence. From building chatbots to detecting deepfakes, students will explore how modern AI works through interactive projects, real-world tools, and creative challenges — all designed to make learning fun and impactful.
              </p>
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                This immersive program will help students understand the future of AI and how it’s already shaping our world — while equipping them with the skills and inspiration to be part of it.
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
            title: "Day 1: AI Awakening – Python & Rule-Based Bots",
          },
          {
            title: "Day 2: AI Vision – Image Recognition & Filters",
          },
          {
            title: "Day 3: AI Ears – Voice Cloning & Deepfake Detectives",
          },
          {
            title: "Day 4: AI Writers – Sentiment Analysis & Fake News",
          },
          {
            title: "Day 5: AI Showdown – Hackathon & Career Paths",
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
              content: <ArtificialIntelligenceSection />,
            },
            {
              title: "AI At Your Place",
              id: "AI At Your Place",
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
                          <img key={``} src="/SingleCarousel/AI/1.jpg" className="size-full" />,
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
                        Want to host this innovative AI workshop at your school or institute? We bring the complete hands-on experience to your location — with interactive sessions, expert facilitation, and exciting AI projects delivered in your own environment.
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                        What we will provide:
                      </p>
                      <BulletList
                        contentClass="text-sm text-left md:text-base xl:text-lg"
                        list={[
                          {
                            title: "Complete AI curriculum and activity plan"
                          },
                          {
                            title: "Certified instructor and teaching assistants"
                          },
                          {
                            title:
                              "Google Colab-based coding exercises",
                          },
                          {
                            title: "On-site, hybrid, or fully virtual delivery options",
                          },
                        ]}
                      />
                      <p>
                        {
                          "Bring the future of technology to your students and let them explore Artificial Intelligence through real-world tools, creative experiments, and future-ready skills — all without stepping outside their campus."
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
