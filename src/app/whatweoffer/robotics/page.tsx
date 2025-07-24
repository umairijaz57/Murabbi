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

export default function page() {
  return (
    <>
      <Navbar />
      <Header Course={"Robotics"} />

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
                  src="/robotics.mp4"
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
                At Murabbi, our robotics program empowers children to explore
                the world of engineering and innovation through hands-on
                learning. Using LEGO EV3 kits, students design, build, and
                program their own robots, gradually mastering key concepts like
                motion control, gear systems, sensor integration, and
                logic-based automation.
              </p>
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                Our sessions focus on project-based learning, where kids build
                obstacle-avoiding robots, participate in Sumo bot challenges,
                and explore real-world applications of robotics. These
                experiences not only develop technical skills but also nurture
                critical thinking, problem-solving, and collaborative teamwork —
                preparing the next generation of young tech leaders.
              </p>
            </div>
          </div>

          {/* Bullet points section */}
          {/* <SlidingDiv
    direction={"top"}
    className="py-4 sm:py-6 md:py-8 lg:py-6 xl:py-8 mt-4 sm:mt-6 lg:mt-8"
  >
    <div className="max-w-4xl mx-auto">
      <BulletList
        contentClass="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700"
        list={[
          {
            title: "Hands-On Learning",
            content:
              "Kids build robots, explore AI, and learn by doing — sparking curiosity and confidence.",
          },
          {
            title: "Future-Ready Skills",
            content:
              "We introduce age-appropriate concepts in AI, Robotics, and Cybersecurity.",
          },
          {
            title: "Creative Expression",
            content:
              "From digital art to calligraphy, kids express themselves and grow in confidence.",
          },
        ]}
      />
    </div>
  </SlidingDiv> */}
        </div>

        <CustomAccordion
          containerClass={"w-full"}
          items={[
            {
              title: "Course Details",
              id: "Course Details",
              content: <RoboticsSection />,
            },
            {
              title: "Robotics At Your Place",
              id: "Robotics At Your Place",
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
                        Experience the thrill of robotics without waiting for
                        the future — it's already here. Our program brings
                        cutting-edge robotics and computer vision training right
                        to your learning space, no matter where you are.
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                        What we will provide:
                      </p>
                      <BulletList
                        contentClass="text-sm text-left md:text-base xl:text-lg"
                        list={[
                          {
                            title: "Complete robotics kits and sensors",
                          },
                          {
                            title: "Pre-configured laptops with ROS & tools",
                          },
                          {
                            title:
                              "Guided hands-on labs and technical mentorship",
                          },
                          {
                            title: "Access to learning material & code samples",
                          },
                        ]}
                      />
                      <p>
                        {
                          "Whether you're a curious beginner or a future innovator, this experience will move you from watching robots to building them. Ready to take control?"
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
