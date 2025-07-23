import React from "react";
import { SlidingDiv } from "../whatweoffer/components/SlidingDiv";
import { FadeIn } from "../whatweoffer/components/FadeIn";
import { CarouselSingle } from "../whatweoffer/components/CarouselSingle";

export default function Testimonial() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl px-8 md:px-16 py-16 mx-4 md:mx-16 my-10 shadow-xl flex flex-col md:flex-row gap-16 items-center justify-between overflow-hidden">
      
      {/* Light Blur Circle Behind */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl z-0" />

      {/* Left Text Side */}
      <div className="z-10 md:w-1/2 space-y-4">
        <SlidingDiv
          direction="left"
          className="text-xl md:text-2xl text-white font-bold border-l-4 pl-4 border-blue-400"
        >
          TESTIMONIALS
        </SlidingDiv>

        <SlidingDiv
          direction="bottom"
          className="text-3xl md:text-4xl text-white font-extrabold leading-tight"
        >
          Voices of Trust & Gratitude
        </SlidingDiv>

        <FadeIn className="text-md md:text-lg text-gray-200">
          Our summer camp wasn’t just a place for fun — it became a space for
          growth, discipline, and heartfelt memories. Parents witnessed the
          transformation in their children and shared their sincere reflections
          with us. Here's what they had to say.
        </FadeIn>
      </div>

      {/* Right Carousel Side */}
      <div className="z-10 md:w-1/2 bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-xl shadow-md border border-white/20">
        <CarouselSingle
          containerClass={"w-full h-full"}
          items={[
            <video
              src="/testimonials/p0.mp4"
              className="rounded-lg shadow-md"
              autoPlay
              loop
            ></video>,
             <video
              src="/testimonials/p1.mp4"
              className="rounded-lg shadow-md"
              autoPlay
              loop
            ></video>,
            <video
              src="/testimonials/p2.mp4"
              className="rounded-lg shadow-md"
              autoPlay
              loop
            ></video>,
          ]}
        />
      </div>
    </div>
  );
}
