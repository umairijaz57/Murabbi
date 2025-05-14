"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import { Project } from "../constant/newsData";

interface ProjectGalleryProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectGallery({
  project,
  onClose,
}: ProjectGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    mode: "snap",
    renderMode: "performance",
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl h-[90vh] bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:scale-110 transition"
        >
          ✕
        </button>

        {/* Title */}
        <div className="absolute top-4 left-6 z-10 text-white font-semibold text-xl drop-shadow-md">
          {project.name}
        </div>

        {/* Main Slider */}
        <div ref={sliderRef} className="keen-slider h-full">
          {project.gallery.map((img, i) => (
            <div
              key={img.id}
              className="keen-slider__slide flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-24 w-full flex justify-center space-x-2 z-10">
          {project.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === idx ? "bg-white w-4" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-4 w-full px-6 overflow-x-auto">
          <div className="flex space-x-3 pb-2">
            {project.gallery.map((img, index) => (
              <div
                key={img.id}
                onClick={() => instanceRef.current?.moveToIdx(index)}
                className={`relative w-20 h-14 rounded-md overflow-hidden cursor-pointer border ${
                  currentSlide === index ? "border-white" : "border-transparent"
                }`}
              >
                <Image
                  src={img.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
