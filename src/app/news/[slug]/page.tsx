"use client";
import { NavBar } from "@/app/homeComponents";
import InLayout from "@/app/layouts/inlayout";
import PageWrapper from "@/app/layouts/pageLayout";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import HImage from "../components/HImage";
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

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",

    slides: {
      perView: 1,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  if (!currentNews) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">404 - News not found</h1>
      </div>
    );
  }

  const selectedProject = currentNews.projects?.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div>
      <NavBar page="News" />
      <HImage Image={currentNews.Image} />
      <PageWrapper>
        <InLayout>
          <div className="mb-6 p-2 sm:p-4">
            <h1 className="text-3xl font-bold mb-4">{currentNews.Title}</h1>
            <p className="text-gray-500 mb-6">{currentNews.Date}</p>
            <p className="px-2">{currentNews.Description}</p>
          </div>

          {currentNews.projects && currentNews.projects.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
                Sessions
              </h2>

              <div ref={sliderRef} className="keen-slider py-2">
                {currentNews.projects.map((project) => (
                  <div
                    key={project.id}
                    className="keen-slider__slide w-[240px] sm:w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setShowGallery(true);
                    }}
                  >
                    {/* Image container with aspect ratio */}
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.thumbnail || "/images/placeholder.jpg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 text-white p-4 transition-opacity duration-300 flex flex-col justify-end">
                      <h3 className="text-lg font-bold">{project.name}</h3>
                      <p className="text-sm text-blue-300 mt-1">
                        View gallery ({project.gallery.length})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InLayout>
      </PageWrapper>

      {/* Modal */}
      {showGallery && selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}
