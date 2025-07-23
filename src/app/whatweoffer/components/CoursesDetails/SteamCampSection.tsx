"use client"
import Image from "next/image"
import { SlidingDiv } from "../SlidingDiv"
import { CarouselSingle } from "../CarouselSingle"
import Robotics from "./Robotics"
import { useState } from "react"
import SteamCamp from "./SteamCamp"

export const SteamCampSection = () => {
  return (
    <div className="p-2 xs:p-4 md:p-6 lg:p-8 rounded-md">
      <div className="flex flex-col-reverse sm:flex-row gap-4 md:gap-6 max-w-7xl mx-auto">
        <SlidingDiv direction={"top"} className="flex-[3_0_0] flex flex-col p-6 gap-6 bg-[#F3EEE8] rounded-xl shadow-sm">
          <div className="text-left relative">
            <div
              className="absolute top-0 left-0 right-0 h-4 z-10 pointer-events-none opacity-0 transition-opacity duration-300"
              id="fade-top"
            ></div>

            <div
              className="overflow-y-auto max-h-[70vh] pr-3 custom-scrollbar scroll-smooth"
              onScroll={(e) => {
                const target = e.target as HTMLDivElement
                const fadeTop = document.getElementById("fade-top")
                const fadeBottom = document.getElementById("fade-bottom")

                if (fadeTop && fadeBottom) {
                  fadeTop.style.opacity = target.scrollTop > 20 ? "1" : "0"

                  const isNearBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 20
                  fadeBottom.style.opacity = isNearBottom ? "0" : "1"
                }
              }}
            >
               <SteamCamp />
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none opacity-100 transition-opacity duration-300"
              id="fade-bottom"
            ></div>
          </div>

        </SlidingDiv>
        <SlidingDiv
          direction={"right"}
          className="sm:flex-[2_0_0] aspect-[3/4] bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <CarouselSingle
        containerClass={"size-full"}
        items={[
          <Image
            key="robotics-1"
            alt="Robotics Course Activity 1"
            width={10000}
            height={1000}
            src={"/SingleCarousel/steam/1.jpeg"}
            className="w-full h-full object-cover"
          />,
          <Image
            key="robotics-2"
            alt="Robotics Course Activity 2"
            width={10000}
            height={1000}
            src={"/SingleCarousel/steam/2.jpg"}
            className="w-full h-full object-cover"
          />,
          <Image
            key="robotics-3"
            alt="Robotics Course Activity 3"
            width={10000}
            height={1000}
            src={"/SingleCarousel/steam/3.jpeg"}
            className="w-full h-full object-cover"
          />,
        ]}
      />
        </SlidingDiv>
      </div>
    </div>
  )
}
