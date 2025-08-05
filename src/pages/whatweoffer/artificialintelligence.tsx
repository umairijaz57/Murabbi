import React from "react";
import { Footer } from "../../app/homeComponents";
import { Navbar } from "../../app/homeComponents/NavbarL";
import Header from "../../app/whatweoffer/components/Header";
import { FadeIn } from "../../app/whatweoffer/components/FadeIn";
import { CustomAccordion } from "../../app/whatweoffer/components/Accordion";
import { SlidingDiv } from "../../app/whatweoffer/components/SlidingDiv";
import { CarouselSingle } from "../../app/whatweoffer/components/CarouselSingle";
import { BulletList } from "../../app/whatweoffer/components/BulletList";
import { ArtificialIntelligenceSection } from "@/app/whatweoffer/components/CoursesDetails/ArtificialIntelligenceSection";

export default function ArtificialIntelligence() {
    return (
        <>
            <Navbar />
            <Header Course={"Artificial Intelligence"} />

            <FadeIn
                threshold={0.01}
                className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"
            >
                <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10">
                    <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-center gap-6 sm:gap-8 lg:gap-8 xl:gap-10">
                        {/* Video container */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
                                <img src="/SingleCarousel/AI/1.jpg" alt="" className="h-full w-full object-cover" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl">
                            <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                                Our AI program introduces students to the fascinating world of artificial intelligence and machine learning. Through hands-on projects, students learn to build and train AI models, understand neural networks, and explore real-world applications of AI technology.
                            </p>
                            <p className="leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-relaxed text-gray-700">
                                From computer vision and natural language processing to predictive analytics, students gain practical experience with cutting-edge AI tools and frameworks, preparing them for the AI-driven future.
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
                                        title: "Day 1: Introduction to AI and Machine Learning",
                                    },
                                    {
                                        title: "Day 2: Neural Networks and Deep Learning",
                                    },
                                    {
                                        title: "Day 3: Computer Vision and Image Recognition",
                                    },
                                    {
                                        title: "Day 4: Natural Language Processing",
                                    },
                                    {
                                        title: "Day 5: AI Project Development and Deployment",
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
                                <ArtificialIntelligenceSection />
                            ),
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
                                                    <img key={``} src="/SingleCarousel/AI/3.jpg" className="size-full" />,
                                                ]}
                                            />
                                        </SlidingDiv>
                                        <SlidingDiv
                                            direction={"right"}
                                            className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]"
                                        >
                                            <h3 className="ttext-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">
                                                Bring the future of AI to your institution with our comprehensive AI training program.
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">
                                                What we will provide:
                                            </p>
                                            <BulletList
                                                contentClass="text-sm text-left md:text-base xl:text-lg"
                                                list={[
                                                    {
                                                        title: "AI development environments and tools",
                                                    },
                                                    {
                                                        title: "Pre-trained models and datasets",
                                                    },
                                                    {
                                                        title: "Expert AI instructors and mentors",
                                                    },
                                                    {
                                                        title: "Hands-on project materials and resources",
                                                    },
                                                ]}
                                            />
                                            <p>
                                                {"Transform your students into AI innovators with practical, hands-on learning experiences."}
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