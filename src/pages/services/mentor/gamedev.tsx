"use client"
import { Code, Settings, Package, LayoutDashboard, Palette, Gamepad2, FileText, Grid2X2, Play, CuboidIcon as Cube, Award, Clock, Sparkles, Briefcase, Calendar, Users, GraduationCap, Laptop, Mouse } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Navbar } from '@/app/homeComponents/NavbarL'
import Image from 'next/image'
import { Footer } from '@/app/homeComponents'

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

const GameDev: React.FC = () => {
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<number>(1)

  const dailyProgram: Record<number, DayProgram> = {
    1: {
      day: "Day 1",
      title: "INTRODUCING UNITY",
      activities: [
        {
          id: "unity-intro",
          title: "Brief Introduction to Unity Game Engine",
          description: "Overview of Unity, its capabilities, and resources like documentation and tutorials.",
          icon: Gamepad2,
        },
        {
          id: "unity-interface",
          title: "Introduction to Interface / Unity Basics",
          description: "Explore Scene View, Game View, Project Browser, Hierarchy window, and Inspector.",
          icon: Settings,
        },
        {
          id: "asset-creation",
          title: "Asset Import and Creation",
          description: "Learn about Packages, Asset Store, Terrain, and building scenes with 3D objects.",
          icon: Package,
        },
      ]
    },
    2: {
      day: "Day 2",
      title: "SCENES AND UI",
      activities: [
        {
          id: "scene-components",
          title: "Building Scenes Components",
          description: "Work with Game Objects, Prefabs, Lights, Cameras, basic shapes, Particle Systems, and Audio.",
          icon: LayoutDashboard,
        },
        {
          id: "ui-design",
          title: "User Interface Design",
          description: "Learn how to design and implement UI components within your games.",
          icon: Palette,
        },
      ]
    },
    3: {
      day: "Day 3",
      title: "GAMEPLAY AND SCRIPTS",
      activities: [
        {
          id: "scripting-overview",
          title: "Creating Game Play with Scripting",
          description: "Understand scripting overview, tools, variables, Inspector, Physics, Sprites, Game objects, Collisions, Animation, and Coroutines.",
          icon: FileText,
        },
      ]
    },
    4: {
      day: "Day 4",
      title: "THE WORLD OF 2D",
      activities: [
        {
          id: "2d-game-dev",
          title: "Build Your First 2D Game",
          description: "Design and develop a complete 2D game, learning mechanics like movement, collisions, scoring, and animations. Create a working prototype with interactive gameplay, sound, and visuals.",
          icon: Grid2X2,
        },
      ]
    },
    5: {
      day: "Day 5",
      title: "ENTER 3D",
      activities: [
        {
          id: "3d-game-dev",
          title: "Create a Basic 3D Game",
          description: "Transition to 3D development, setting up environments, manipulating models, applying physics, handling player movement, and camera controls. Complete a simple 3D game and showcase your project.",
          icon: Cube,
        },
        {
          id: "championship-closing",
          title: "Certificates & Prizes",
          description: "Celebrate your achievements and receive certificates for completing the workshop.",
          icon: Award,
        },
      ]
    }
  }

  const programHighlights: ProgramHighlight[] = [
    {
      icon: Gamepad2,
      title: "Unity Game Engine",
      description: "Work with the industry-standard Unity game engine for real-world skills."
    },
    {
      icon: Clock,
      title: "5 Intensive Days",
      description: "Comprehensive program packed with hands-on game development projects."
    },
    {
      icon: Sparkles,
      title: "Build Your Own Games",
      description: "Create playable 2D and 3D game prototypes from concept to completion."
    },
    {
      icon: Briefcase,
      title: "Career Pathways",
      description: "Explore exciting career paths in game development, animation, and interactive media."
    }
  ]

  // Array for image gallery
  const imageGalleryItems = [
    { src: '/SingleCarousel/gamedev/1.jpg', alt: 'Student coding in Unity' },
    { src: '/SingleCarousel/gamedev/2.jpg', alt: '3D game level design in Unity' },
    { src: '/SingleCarousel/gamedev/3.jpg', alt: '2D game character animation in Unity' },
  ];

  const handleActivityHover = (activityId: string | null): void => {
    setHoveredActivity(activityId)
  }

  const handleDaySelect = (day: number): void => {
    setSelectedDay(day)
  }

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
            Game On with Unity
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
            Imagine, Design, Build, Craft Worlds, and Code Gameplay in This Power-Packed Unity Game Dev
            Bootcamp for High School Students. Dive into an exciting 5-day exploration of the exciting world of game design and development with
            <span className="font-semibold text-blue-800"> Unity. </span>
            From concept to creation, students will learn how to design levels, animate characters, write
            scripts, and build their very own 2D and 3D games. Through a mix of coding challenges, creative
            storytelling, and hands-on Unity projects, they’ll gain real-world skills used by professional game
            developers.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            {['Game Design', 'Unity Development', '2D & 3D Games', 'Coding Skills'].map((feature: string) => (
              <span key={feature} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-700 rounded-full text-blue-800">
                {feature}
              </span>
            ))}
          </div>
          {/* Added Hero Image */}
          {/*  */}
        </div>


        {/* 5-Day Activity Program Section (Prioritized) */}
        <div className="w-full max-w-7xl mb-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">Tentative Outline: 5-Day Activity Program</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Dive deep into Unity with a structured curriculum designed to build your game development skills from the ground up.
          </p>
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(dailyProgram).map((day: string) => {
              const dayNumber = parseInt(day)
              return (
                <button
                  key={day}
                  onClick={() => handleDaySelect(dayNumber)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedDay === dayNumber
                      ? 'bg-blue-700 text-white shadow-lg'
                      : 'bg-white/60 text-blue-800 border border-blue-700/20 hover:bg-blue-100'
                  }`}
                >
                  {dailyProgram[dayNumber].day}
                </button>
              )
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
            <div className={`grid gap-8 ${
              dailyProgram[selectedDay].activities.length === 1
                ? 'grid-cols-1 max-w-2xl mx-auto'
                : dailyProgram[selectedDay].activities.length === 2
                  ? 'grid-cols-1 lg:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {dailyProgram[selectedDay].activities.map((activity: Activity, index: number) => (
                <Card
                  key={activity.id}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => handleActivityHover(activity.id)}
                  onMouseLeave={() => handleActivityHover(null)}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
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
              ))}
            </div>
          </div>
        </div>

        {/* <div className="w-full max-w-xl mb-20 mt-16"> 
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">See Our Games in Action!</h2>
          <div className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-2xl border border-blue-200"> 
            <video
              controls
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/game-dev-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch a showcase of games and projects created using the Unity engine.
          </p>
        </div> */}

        <div className="w-full max-w-6xl mb-20 mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Game Dev Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-lg border border-blue-200" // pb-[100%] for 1:1 aspect ratio
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            A glimpse into our workshops, coding sessions, and creative game design processes.
          </p>
        </div>

        {/* Program Highlights Section */}
        <div className="w-full max-w-6xl mb-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight: ProgramHighlight, index: number) => (
              <div
                key={highlight.title}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <highlight.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default GameDev
