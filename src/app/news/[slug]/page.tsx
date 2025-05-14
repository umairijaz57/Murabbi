"use client";
import { Description, NavBar } from "@/app/homeComponents";
import InLayout from "@/app/layouts/inlayout";
import PageWrapper from "@/app/layouts/pageLayout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HImage from "../components/HImage";
import ProjectGallery from "../components/ProjectGallery";
import { newsData, toSlug } from "../constant/newsData";

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [showGallery, setShowGallery] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Find the news item based on the slug from the URL
  const currentNews = newsData.find(
    (item) => toSlug(item.Title) === params.slug
  );

  // If news item is not found, show 404
  if (!currentNews) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">404 - News not found</h1>
      </div>
    );
  }

  // Handle project click
  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setShowGallery(true);
  };

  // Handle close gallery
  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  // Enable smooth scrolling with mouse wheel
  useEffect(() => {
    const scrollContainer = scrollerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Get selected project
  const selectedProject = currentNews.projects?.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div>
      <NavBar page="News" />
      {/* Check if Image exists before rendering */}
      <HImage Image={currentNews.Image} />
      <PageWrapper>
        <InLayout>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">{currentNews.Title}</h1>
            <p className="text-gray-500 mb-6">{currentNews.Date}</p>
            <Description text={currentNews.Description} />
          </div>

          {currentNews.projects && currentNews.projects.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
                Sessions
              </h2>

              {/* Marquee Style Scrollable Track with improved scrolling */}
              <div
                ref={scrollerRef}
                className="overflow-x-auto whitespace-nowrap py-4 scroll-smooth hide-scrollbar"
                style={{
                  scrollbarWidth: "none" /* Firefox */,
                  msOverflowStyle: "none" /* IE and Edge */,
                }}
              >
                {/* Apply padding to create space at beginning */}
                <div className="inline-block w-2"></div>

                {currentNews.projects.map((project) => (
                  <div
                    key={project.id}
                    className="inline-block mx-4 group relative min-w-[280px] sm:min-w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {/* Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.thumbnail || "/images/placeholder.jpg"}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Overlay Text (only on hover, only for this card) */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 text-white p-4 transition-opacity duration-300 flex flex-col justify-end">
                      <h3 className="text-lg font-bold">{project.name}</h3>
                      {/* <p className="text-sm text-gray-200 line-clamp-2">
                        {project.description}
                      </p> */}
                      <p className="text-sm text-blue-300 mt-1">
                        View gallery ({project.gallery.length})
                      </p>
                    </div>
                  </div>
                ))}

                {/* Apply padding to create space at end */}
                <div className="inline-block w-2"></div>
              </div>

              {/* Visual indicator for scrollability */}
              {/* <div className="flex justify-center mt-4 items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div> */}
            </div>
          )}
        </InLayout>
      </PageWrapper>

      {/* Project Gallery Modal */}
      {showGallery && selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={handleCloseGallery}
        />
      )}

      <style jsx global>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
}
