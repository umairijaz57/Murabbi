"use client";
import { Footer } from "@/app/homeComponents";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectGallery from "../components/ProjectGallery";
import { newsData, toSlug } from "../constant/newsData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/app/homeComponents/NavbarL";

export default function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>("");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  // Handle async params
  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  const currentNews = newsData.find(
    (item) => toSlug(item.Title) === slug
  );

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  // Updated slider configuration
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 24 } },
    },
    created(slider) {
      setTotalSlides(slider.track.details.slides.length);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Show loading while params are being resolved
  if (!slug) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!currentNews) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">404 - News not found</h1>
      </div>
    );
  }

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Image */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="relative h-64 md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-12"
        >
          <Image
            src={currentNews.Image}
            alt={currentNews.Title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Title Section */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            {currentNews.Title}
          </h1>
          <div className="text-gray-600 font-bold  px-4 py-1 rounded-full text-sm font-medium w-fit text-center mx-auto ">
            {currentNews.Date} | Islamabad, Pakistan
          </div>
        </motion.header>

        {/* News Content */}
        <motion.article
          className="max-w-4xl mx-auto prose prose-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentNews.Description.split("\n").map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </motion.article>

        {/* Gallery Section with Navigation Buttons */}
        {currentNews.projects && currentNews.projects.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Sessions Gallery
            </h2>
            
            <div className="relative">
              {/* Slider Container */}
              <div ref={sliderRef} className="keen-slider pb-8">
                {currentNews.projects.map((project) => (
                  <div
                    key={project.id}
                    className="keen-slider__slide group relative"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setShowGallery(true);
                    }}
                  >
                    <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Image Container */}
                      <div className="relative aspect-video">
                        <Image
                          src={project.thumbnail}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Info Overlay */}
                      <div className="p-4 md:hidden">
                        <h3 className="font-semibold text-gray-900">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                          View ({project.gallery.length}) Photos
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 hidden md:flex items-start rounded-md justify-end flex-col text-center p-4">
                        <h1 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.name}
                        </h1>
                        <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Gallery →
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Back Button - Hidden on first slide */}
              {currentSlide > 0 && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current?.prev();
                  }}
                  className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
              )}
              
              {/* Forward Button - Hidden on last slide */}
              {currentSlide < totalSlides-2  && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current?.next();
                  }}
                  className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Gallery Modal */}
      {showGallery && selectedProjectId && (
        <ProjectGallery
          project={
            currentNews.projects?.find((p) => p.id === selectedProjectId)!
          }
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>

    <Footer />
    </>
  );
}