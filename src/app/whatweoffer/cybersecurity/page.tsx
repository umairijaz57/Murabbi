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
import { CyberSecuritySection } from "../components/CoursesDetails/CyberSecuritySection";

export default function page() {
  return (
    <>
      <Navbar />
      <Header Course={"Cyber Security"} />

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
                Murabbi is offering an exciting 5-day hands-on workshop that opens the doors to the fascinating world of cybersecurity. From breaking historical ciphers to exploring modern hacking techniques, students will experience a unique blend of technology, puzzles, and real-world security tools.
              </p>
              <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                This immersive program is crafted to ignite curiosity and build essential skills in ethical hacking, encryption, network forensics, and digital security — helping students discover how cybersecurity shapes our digital world and where it can take them in the future.
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
            title: "Day 1: Codebreakers' Legacy: Classical Ciphers Unlocked",
          },
          {
            title: "Day 2: Secrets of Modern Encryption | The Virus Lab",
          },
          {
            title: "Day 3: Hack the Net: Eavesdropping & Digital Sleuthing",
          },
          {
            title: "Day 4: Digital Fingerprints & Hacking Protocols",
          },
          {
            title:"Day 5: Cryptocurrencies Crash Course"
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
              content: <CyberSecuritySection />,
            },
            {
              title: "Cyber Security At Your Place",
              id: "Cyber Security At Your Place",
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
                          <img key={``} src="/cyber.jpg" className="size-full" />,
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
                        Want this thrilling workshop conducted right at your school or institute? We bring the full cybersecurity experience to your place — the same expert-led sessions, challenges, and hands-on labs tailored for your space and schedule.
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
                              "Lab kits, setup guides, and activity material",
                          },
                          {
                            title: "On-site or hybrid delivery options",
                          },
                        ]}
                      />
                      <p>
                        {
                          "This is a perfect opportunity for schools and organizations to empower their students with future-ready cybersecurity skills — without having to leave their campus."
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
