"use client";

import {
  Brain,
  Bot,
  Eye,
  Sparkles,
  PenTool,
  Gamepad2,
  Radio,
  Trophy,
  Users,
  Clock,
  Zap,
  Target,
  Award,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { Navbar } from "@/app/homeComponents/NavbarL";
import { Footer } from "@/app/homeComponents";
import Image from "next/image";

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: any;
}

interface DayProgram {
  day: string;
  title: string;
  activities: Activity[];
}

interface ProgramHighlight {
  icon: any;
  title: string;
  description: string;
}

const AI: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const dailyProgram: Record<number, DayProgram> = {
    1: {
      day: "Day 1",
      title: "AI Foundations & Chatbots",
      activities: [
        {
          id: "personal-chatbot",
          title: "Create Your Own Personal Chatbot",
          description:
            "Build an intelligent chatbot from scratch. Learn natural language processing and conversational AI principles.",
          icon: Bot,
        },
      ],
    },
    2: {
      day: "Day 2",
      title: "Creative AI",
      activities: [
        {
          id: "ai-stories",
          title: "Bring Stories To Life With AI",
          description:
            "Use AI to generate interactive narratives and bring your imagination to life with intelligent storytelling.",
          icon: Sparkles,
        },
      ],
    },
    3: {
      day: "Day 3",
      title: "Nature Intelligence",
      activities: [
        {
          id: "learn-from-ants",
          title: "What Do We Learn from Ants?",
          description:
            "Explore swarm intelligence and how ant colonies inspire AI algorithms and collective problem-solving.",
          icon: Brain,
        },
        {
          id: "human-vs-ants",
          title: "Human vs Ants: Who Will Win?",
          description:
            "A fascinating finale comparing human intelligence with ant colony algorithms in strategic problem-solving.",
          icon: Users,
        },
      ],
    },
    4: {
      day: "Day 4",
      title: "Surveillance Intelligence",
      activities: [
        {
          id: "surveillance-system",
          title: "Intelligent Surveillance System Design",
          description:
            "Design smart surveillance systems using computer vision and AI detection algorithms.",
          icon: Eye,
        },
      ],
    },
    5: {
      day: "Day 5",
      title: "Ultimate AI Showdown",
      activities: [
        {
          id: "ai-vs-human",
          title: "AI vs Human: Who Will Win?",
          description:
            "The ultimate competition! Test your skills against AI in various challenges and see who comes out on top.",
          icon: Zap,
        },
      ],
    },
  };

  const programHighlights: ProgramHighlight[] = [
    {
      icon: Brain,
      title: "AI Fundamentals",
      description:
        "Learn core concepts of artificial intelligence and machine learning",
    },
    {
      icon: Clock,
      title: "5 Intensive Days",
      description:
        "Comprehensive program packed with hands-on AI projects and competitions",
    },
    {
      icon: Trophy,
      title: "Real-World Applications",
      description:
        "Build practical AI solutions for surveillance, gaming, and creative projects",
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Collaborate in teams and compete in AI vs Human challenges",
    },
  ];

  const handleActivityHover = (activityId: string | null): void => {
    setHoveredActivity(activityId);
  };

  const handleDaySelect = (day: number): void => {
    setSelectedDay(day);
  };

  const imageGalleryItems = [
    { src: "/SingleCarousel/AI/1.jpg" },
    { src: "/SingleCarousel/AI/2.jpg" },
    { src: "/SingleCarousel/AI/3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <main className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-blue-800 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            AI Mastery
          </h1>

          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Unlock the power of artificial intelligence through
            <span className="font-semibold text-blue-800">
              {" "}
              hands-on projects and competitions.{" "}
            </span>
            Master AI concepts, build intelligent systems, and compete against
            both humans and machines.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Chatbot Development",
              "Computer Vision",
              "AI Competition",
              "Creative AI Projects",
            ].map((feature: string) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            5-Day AI Journey
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            From building your first chatbot to competing against AI systems in
            the ultimate showdown.
          </p>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(dailyProgram).map((day: string) => {
              const dayNumber = parseInt(day);
              return (
                <button
                  key={day}
                  onClick={() => handleDaySelect(dayNumber)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedDay === dayNumber
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-white/60 text-blue-800 border border-blue-700/20 hover:bg-blue-100"
                  }`}
                >
                  {dailyProgram[dayNumber].day}
                </button>
              );
            })}
          </div>

          {/* Selected Day Content */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                {dailyProgram[selectedDay].title}
              </h3>
              <div className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {dailyProgram[selectedDay].day}
              </div>
            </div>

            <div
              className={`grid gap-8 ${
                dailyProgram[selectedDay].activities.length === 1
                  ? "grid-cols-1 max-w-2xl mx-auto"
                  : dailyProgram[selectedDay].activities.length === 2
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {dailyProgram[selectedDay].activities.map(
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
                    {/* blue overlay on hover */}
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
        {/* <div className="w-full max-w-xl mb-20 mt-16">
          {" "}
          <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200">
            {" "}
            <video
              controls
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/jolly.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch our Jolly Phonics navigate challenges and compete in exciting
            tasks.
          </p>
        </div> */}

        {/* Dedicated Image Gallery Section (Grid) */}
        <div className="w-full max-w-6xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-lg border border-blue-200" // pb-[100%] for 1:1 aspect ratio
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt=""
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

        <div className="w-full max-w-6xl mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map(
              (highlight: ProgramHighlight, index: number) => (
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
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AI;
