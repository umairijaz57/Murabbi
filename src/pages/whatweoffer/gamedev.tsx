import React from "react";
import { Footer } from "../../app/homeComponents";
import { Navbar } from "../../app/homeComponents/NavbarL";
import Header from "../../app/whatweoffer/components/Header";
import { FadeIn } from "../../app/whatweoffer/components/FadeIn";
import { CustomAccordion } from "../../app/whatweoffer/components/Accordion";
import { SlidingDiv } from "../../app/whatweoffer/components/SlidingDiv";
import { CarouselSingle } from "../../app/whatweoffer/components/CarouselSingle";
import { BulletList } from "../../app/whatweoffer/components/BulletList";
import { GameDevSection } from "@/app/whatweoffer/components/CoursesDetails/GameDevSection";

export default function GameDevelopment() {
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
                               <img src="/SingleCarousel/gamedev/2.jpeg" alt="" className="h-full w-full object-cover"/>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl">
                            <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                                Our game development program introduces students to the exciting world of creating interactive digital experiences. Using Unity and other industry-standard tools, students learn to design, code, and build their own 2D and 3D games.
                            </p>
                            <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                                From game mechanics and physics to storytelling and user experience design, students develop comprehensive skills in game development while unleashing their creativity and imagination.
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
                                        title: "Day 1: Introduction to Game Development and Unity",
                                    },
                                    {
                                        title: "Day 2: Game Mechanics and Physics",
                                    },
                                    {
                                        title: "Day 3: Character Design and Animation",
                                    },
                                    {
                                        title: "Day 4: Level Design and User Experience",
                                    },
                                    {
                                        title: "Day 5: Game Testing and Publishing",
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
                            content: (
                               <GameDevSection />
                            ),
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
                                            />
                                        </SlidingDiv>
                                        <SlidingDiv
                                            direction={"right"}
                                            className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                                        >
                                            <h3 className="ttext-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">
                                                Bring the excitement of game development to your institution with our comprehensive training program.
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                                                What we will provide:
                                            </p>
                                            <BulletList
                                                contentClass="text-sm text-left md:text-base xl:text-lg"
                                                list={[
                                                    {
                                                        title: "Unity development environments and licenses",
                                                    },
                                                    {
                                                        title: "Game development assets and resources",
                                                    },
                                                    {
                                                        title: "Expert game development instructors",
                                                    },
                                                    {
                                                        title: "Hands-on project materials and tutorials",
                                                    },
                                                ]}
                                            />
                                            <p>
                                                {"Transform your students into game creators with practical, hands-on development experiences."}
                                            </p>
                                        </SlidingDiv>
                                    </div>
                                </div>
                            ),
                        },
                    ]}
                />
            </FadeIn>
            <Footer />
        </>
    );
} 