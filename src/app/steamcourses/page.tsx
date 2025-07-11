'use client'
import React from 'react'
import { CustomAccordion } from './components/Accordion'
import { CarouselSingle } from './components/CarouselSingle'
import { SlidingDiv } from './components/SlidingDiv'
import { FadeIn } from './components/FadeIn'
import { BulletList } from './components/BulletList'
import { CourseDetailContent } from './components/CourseDetailContent'
import { Footer, NavBar } from '../homeComponents'
import { CustomButton } from './components/CustomBtn'
import Header from './components/Header'

export default function page() {
  return (
    <>
    <NavBar />
    <Header />
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
          <p>At Murabbi, our STEAM Camp is where creativity meets technology. Designed especially for young learners, our camp introduces children to exciting fields like Robotics, Artificial Intelligence, Information Security, and Calligraphy — all through fun, age-appropriate, hands-on activities.</p>
          <p>We don't just teach, we ignite curiosity — encouraging kids to explore, build, break, imagine, and express themselves freely. Our unique blend of tech and art prepares students not just for the future, but to shape it.</p>
          <p>Led by passionate educators and experts, we ensure every child experiences a safe, inspiring, and empowering environment where learning feels like play — and discovery never ends.</p>
        </div>
        <SlidingDiv direction={"top"} className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
          <BulletList contentClass="text-base md:text-lg xl:text-xl"
          list={[
            {title: "Hands-On Learning", content: "Kids build robots, explore AI, and learn by doing — sparking curiosity and confidence."},
            {title: "Future-Ready Skills", content: "We introduce age-appropriate concepts in AI, Robotics, and Cybersecurity."},
            {title: "Creative Expression", content: "From digital art to calligraphy, kids express themselves and grow in confidence."}
          ]} />
        </SlidingDiv>
        
        <CustomAccordion containerClass={"w-full"} 
        items={[
            {
            title: "Course Details",
            id: "Course Details",
            content: <CourseDetailContent />
        },
        {
            title: "Steam At Your Place",
            id: "Steam At Your Place",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <SlidingDiv direction={"left"} className="sm:flex-[2_0_0] aspect-square bg-neutral-400">
                <CarouselSingle containerClass={"size-full"} items={[
                      <img key={``} src="/1.jpg" className="size-full" />, 
                    ]}
                //     nextButton={
                //     <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                //       <CustomButton outerColor={"blue-900"} innerColor={"#FFFFFF"}/>
                //     </div>
                //   }
                   />
                </SlidingDiv>
                <SlidingDiv direction={"right"} className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]">
                  <h3 className="ttext-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-900 font-bold">Whether you're a homeschooler, a school administrator, or a parent — we bring the full STEAM experience to you. No matter the space, we make it a creative hub of learning and innovation.</h3>
                   <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left">We provide everything needed:</p>
                   <BulletList contentClass="text-sm text-left md:text-base xl:text-lg"
        list={[
          {title: "Complete STEAM kits tailored to age and skill level"},
          {title: "Trained instructors to guide hands-on learning"},
          {title: "Ongoing support and flexible scheduling"},
        ]} />
                  <p>{"From classrooms to living rooms — learning doesn’t wait. We make sure every child has access to future-ready education, right where they are."}</p>
                </SlidingDiv>
              </div>
            </div>
          },
        ]}
        />          
      </div>
    </FadeIn>
    <Footer />
        </>
  )
}
