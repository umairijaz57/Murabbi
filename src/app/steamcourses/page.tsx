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
  <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-12">
    {/* Video Section - Enhanced */}
    <div className="w-full lg:w-1/2">
      <div className="relative group">
        {/* Video Container with improved styling for vertical video */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-1 shadow-2xl max-w-sm mx-auto lg:max-w-full">
          <div className="relative overflow-hidden rounded-xl bg-black">
            <video
              src="video.mp4"
              className="w-full h-auto max-h-[60vh] sm:max-h-[50vh] lg:max-h-[70vh] object-cover transition-transform duration-300 group-hover:scale-105" 
              autoPlay
              muted
              loop
              playsInline
              poster="/api/placeholder/400/600"
            />
            
            {/* Overlay for better visual appeal */}
            
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-blue-500/20 rounded-full blur-xl -z-10" />
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-purple-500/20 rounded-full blur-xl -z-10" />
      </div>
    </div>

    {/* Text Section - Enhanced responsive typography */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl">
      <p className="leading-relaxed">
        At Murabbi, our STEAM Camp is where creativity meets technology.
        Designed especially for young learners, our camp introduces children to
        exciting fields like Robotics, Artificial Intelligence, Information
        Security, and Calligraphy — all through fun, age-appropriate,
        hands-on activities.
      </p>
      <p className="leading-relaxed">
        We don't just teach, we ignite curiosity — encouraging kids to explore,
        build, break, imagine, and express themselves freely. Our unique blend
        of tech and art prepares students not just for the future, but to shape
        it.
      </p>
      <p className="leading-relaxed">
        Led by passionate educators and experts, we ensure every child
        experiences a safe, inspiring, and empowering environment where learning
        feels like play — and discovery never ends.
      </p>

      <SlidingDiv
        direction={"top"}
        className="pl-4 xs:pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24 py-4"
      >
        <BulletList
          contentClass="text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl"
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
      </SlidingDiv>
    </div>
  </div>
</div>

        
        
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
      {/* </div> */}
    </FadeIn>
    <Footer />
        </>
  )
}
