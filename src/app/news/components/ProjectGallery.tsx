"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project, ProjectImage } from "../constant/newsData"; // Import the actual types

interface ProjectGalleryProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectGallery({
  project,
  onClose,
}: ProjectGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Normalize gallery data to consistent format - handle ProjectImage[] format
  const normalizedGallery = project.gallery.map((item, index) => {
    // If it's a ProjectImage object with src property
    if (typeof item === 'object' && 'src' in item) {
      return {
        id: item.id || index,
        src: item.src,
        alt: item.alt || `${project.name} - Image ${index + 1}`
      };
    }
    // If it's a string URL
    if (typeof item === 'string') {
      return {
        id: index,
        src: item,
        alt: `${project.name} - Image ${index + 1}`
      };
    }
    // Fallback
    return {
      id: index,
      src: String(item),
      alt: `${project.name} - Image ${index + 1}`
    };
  });

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    mode: "snap",
    renderMode: "performance",
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-6xl h-[90vh] bg-white/10 rounded-2xl shadow-xl overflow-hidden border border-white/20" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:scale-110 transition text-2xl font-bold w-8 h-8 flex items-center justify-center"
          aria-label="Close gallery"
        >
          ✕
        </button>

        {/* Title */}
        <div className="absolute top-4 left-6 z-10 text-white font-semibold text-xl drop-shadow-md">
          {project.name}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 right-16 z-10 text-white/80 text-sm drop-shadow-md">
          {currentSlide + 1} / {normalizedGallery.length}
        </div>

        {/* Main Slider */}
        <div ref={sliderRef} className="keen-slider h-full">
          {normalizedGallery.map((img, i) => (
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

        {/* Navigation Arrows */}
        {normalizedGallery.length > 1 && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:scale-110 transition text-3xl bg-black/30 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Previous image"
            >
              ‹
            </button>
            
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:scale-110 transition text-3xl bg-black/30 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Navigation Dots */}
        {normalizedGallery.length > 1 && (
          <div className="absolute bottom-24 w-full flex justify-center space-x-2 z-10">
            {normalizedGallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === idx ? "bg-white w-4" : "bg-white/40"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Thumbnails */}
        {normalizedGallery.length > 1 && (
          <div className="absolute bottom-4 w-full px-6 overflow-x-auto">
            <div className="flex space-x-3 pb-2">
              {normalizedGallery.map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => instanceRef.current?.moveToIdx(index)}
                  className={`relative w-20 h-14 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                    currentSlide === index ? "border-white shadow-lg" : "border-transparent hover:border-white/50"
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
        )}
      </div>
    </div>
  );
}