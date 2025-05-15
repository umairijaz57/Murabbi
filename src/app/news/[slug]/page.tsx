"use client";
import { NavBar } from "@/app/homeComponents";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import ProjectGallery from "../components/ProjectGallery";
import { newsData, toSlug } from "../constant/newsData";

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [showGallery, setShowGallery] = useState(false);

  const currentNews = newsData.find(
    (item) => toSlug(item.Title) === params.slug
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

  // Fixed slider configuration
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 24 } },
    },
  });

  if (!currentNews) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">404 - News not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar page="News" />

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {currentNews.Title}
          </h1>
          <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium w-fit">
            {currentNews.Date}
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
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.article>

        {/* Gallery Section - Fixed */}
        {currentNews.projects && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Sessions Gallery
            </h2>

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
  );
}
