"use client";

import {
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { Navbar } from "@/app/homeComponents/NavbarL";
import { Footer } from "@/app/homeComponents";
import Image from "next/image";
import { Activity, ProgramHighlight, ProgramPageProps,} from "./interface";

export const ProgramPage: React.FC<ProgramPageProps> = ({ config }) => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);

  const {
    title,
    subtitle,
    description,
    features,
    programData,
    highlights,
    imageGallery,
    videoSrc,
    videoDescription,
    journeyTitle,
    journeyDescription,
  } = config;

  const handleActivityHover = (activityId: string | null): void => {
    setHoveredActivity(activityId);
  };

  const handlePeriodSelect = (period: number): void => {
    setSelectedPeriod(period);
  };

  const getGridClasses = (activitiesLength: number): string => {
    if (activitiesLength === 1) return "grid-cols-1 max-w-2xl mx-auto";
    if (activitiesLength === 2) return "grid-cols-1 lg:grid-cols-2";
    if (activitiesLength <= 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-blue-800 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            {title}
          </h1>

          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            {subtitle}
            <span className="font-semibold text-blue-800"> {description} </span>
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {features.map((feature: string) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Program Schedule Section */}
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            {journeyTitle}
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            {journeyDescription}
          </p>

          {/* Period Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(programData).map((period: string) => {
              const periodNumber = parseInt(period);
              return (
                <button
                  key={period}
                  onClick={() => handlePeriodSelect(periodNumber)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPeriod === periodNumber
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-white/60 text-blue-800 border border-blue-700/20 hover:bg-blue-100"
                  }`}
                >
                  {programData[periodNumber].period}
                </button>
              );
            })}
          </div>

          {/* Selected Period Content */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                {programData[selectedPeriod].title}
              </h3>
              <div className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {programData[selectedPeriod].period}
              </div>
            </div>

            <div
              className={`grid gap-8 ${getGridClasses(
                programData[selectedPeriod].activities.length
              )}`}
            >
              {programData[selectedPeriod].activities.map(
                (activity: Activity, index: number) => (
                  <Card
                    key={activity.id}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    onMouseEnter={() => handleActivityHover(activity.id)}
                    onMouseLeave={() => handleActivityHover(null)}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Blue overlay on hover */}
                    <div className="absolute inset-0 bg-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardHeader className="relative flex flex-col items-center text-center p-8 pb-4">
                      <div className="p-4 rounded-2xl bg-blue-50 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg">
                        <activity.icon className="h-8 w-8 text-blue-700" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3">
                        {activity.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>

        {/* Video Section */}
        {videoSrc && (
          <div className="w-full max-w-xl mb-20 mt-16">
            <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200">
              <video
                controls
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {videoDescription && (
              <p className="text-center text-gray-600 mt-4 text-lg">
                {videoDescription}
              </p>
            )}
          </div>
        )}

        {/* Image Gallery Section */}
        {imageGallery.length > 0 && (
          <div className="w-full max-w-6xl mb-20 mt-16">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageGallery.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-lg border border-blue-200"
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt || ""}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4 text-lg">
              A glimpse into our workshops, building sessions, and thrilling
              competitions.
            </p>
          </div>
        )}

        {/* Program Highlights */}
        <div className="w-full max-w-6xl mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight: ProgramHighlight, index: number) => (
              <div
                key={highlight.title}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <highlight.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};