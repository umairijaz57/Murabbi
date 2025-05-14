"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const images = [
  "/heroslider/hero_1.jpg",
  "/heroslider/hero_2.jpg",
  "/heroslider/hero_3.jpg",
  "/heroslider/hero_4.jpg",
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      setCurrentSlide(0);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      {/* Background Slider */}
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full transition-opacity duration-[3s]"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              zIndex: currentSlide === idx ? 1 : 0,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                fill
                className={`object-cover relative`}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-600/50" />
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-start p-5 md:pl-16 text-white">
        <div className="flex flex-col gap-6 w-full md:max-w-2xl mt-20 mb-12 md:mb-0 lg:mt-0 px-2 lg:px-4">
          <div className="border-l-4 border-blue-500 pl-2">
            EDUCATION SOLUTION
          </div>
          <div className="font-bold text-4xl md:text-5xl">
            Learn, Grow & Succeed <br /> with{" "}
            <span className="text-blue-500">Murabbi</span>
          </div>
          <div className="text-lg">
            Are you ready to take your career to the next level? Look no further
            than Murabbi, where our state-of-the-art training solutions will
            revolutionize the way you learn.
          </div>
          <div className="flex flex-row gap-4 items-center md:pt-4">
            <Link href="/aboutus">
              <button className="py-3 px-6 flex items-center gap-1 bg-blue-500 text-white font-semibold rounded-lg border-2 border-blue-500 hover:bg-white hover:text-blue-600 transition-colors duration-300">
                <span>Find out more</span>
                <BsArrowRightShort size={25} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
