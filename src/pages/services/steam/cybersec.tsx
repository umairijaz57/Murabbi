"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  Blocks,
  Clock,
  Mountain,
  Navigation,
  Sparkles,
  Trophy,
  Users,
  Zap,
  Star,
  Quote,
  Bot,
  Brain,
  Eye,
  TrophyIcon,
  SearchIcon,
  FlagIcon,
  BookTextIcon,
  AudioWaveformIcon,
  ShieldIcon,
  PuzzleIcon,
} from "lucide-react";
import Image from "next/image";
import Testimonial from "@/app/homeComponents/Testimonial";
import { Navbar } from "@/app/homeComponents/NavbarL";
import { Footer } from "@/app/homeComponents";

export default function cybersec() {
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 3 | 4 | 5>(1);

  const programData = {
    1: {
      period: "Day 1",
      title: "Code, Cipher & Da Vinci",
      activities: [
        {
          id: "da-vinci-codes",
          title: "Leonardo da Vinci's Secret Codes",
          description: "Discover and decode da Vinci's mysterious encryption techniques and apply them to your own secret messages.",
          icon: PuzzleIcon,
        },
      ],
    },
    2: {
      period: "Day 2",
      title: "Ancient Encryption & Morse Code",
      activities: [
        {
          id: "ancient-encryption",
          title: "Encryption Techniques from Greece and Rome",
          description: "Travel back in time to explore ancient encryption methods and how they relate to modern digital security.",
          icon: ShieldIcon,
        },
        {
          id: "morse-code",
          title: "Crack the Morse Code", 
          description: "Master the art of dots and dashes. Learn how Morse Code shaped secret communication across history.",
          icon: AudioWaveformIcon,
        },
      ],
    },
    3: {
      period: "Day 3",
      title: "Language, Symbols & Spy Secrets",
      activities: [
        {
          id: "pictogram-language",
          title: "From Pictograms to Language",
          description: "Understand how ancient pictograms evolved into language and how symbolic systems still influence encryption today.",
          icon: BookTextIcon,
        },
        {
          id: "washington-secrets",
          title: "George Washington's Encryption Tactics", 
          description: "Learn the clever spy techniques used during the American Revolution and create your own patriotic ciphers.",
          icon: FlagIcon,
        },
      ],
    },
    4: {
      period: "Day 4",
      title: "Virtual Reality & Calligraphy Lab",
      activities: [
        {
          id: "sherlock-cipher",
          title: "Crack the Code with Sherlock Holmes",
          description: "Put your logic and codebreaking skills to the test with mystery puzzles inspired by Sherlock Holmes.",
          icon: SearchIcon,
        },
      ],
    },
    5: {
      period: "Day 5",
      title: "The Final Cipher Challenge",
      activities: [
        {
          id: "cyber-sports",
          title: "The Code of Champions",
          description: "Engage in physical and mental challenges to refresh your skills and earn your title as Cyber Champion.",
          icon: TrophyIcon,
        },
      ],
    },
  };

  const getGridClasses = (activitiesLength: number): string => {
    if (activitiesLength === 1) return "grid-cols-1 max-w-2xl mx-auto";
    if (activitiesLength === 2) return "grid-cols-1 lg:grid-cols-2";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
    <div className="relative">
      {/* Hero Section */}
      <div className="relative w-full min-h-[75vh] bg-[url(/2.jpg)] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
        <div className="relative flex min-h-[75vh]">
          <div className="flex flex-col justify-center p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
              Bring the Excitement of{" "}
              <span className="text-blue-400">Cyber Security TRACK</span> to Your
              Campus
            </h1>
          </div>
        </div>
      </div>
      
      {/* Overlapping Cards */}
      <div className="absolute top-[100%] right-6 transform -translate-y-1/2 flex gap-2 z-20">
        {/* Discover Card */}
        <div className="bg-blue-400 px-6 md:px-10 py-3 rounded-lg flex flex-col items-center gap-4 w-fit shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col text-sm md:text-base items-center text-white font-serif leading-tight">
            <p>Cyber</p>
            <p>Security</p>
            <p>TRACK</p>
          </div>
          <h1 className="bg-white px-3 py-1 font-bold rounded-md text-blue-400 text-sm md:text-base hover:bg-gray-100 transition-colors">
            Discover
          </h1>
        </div>
        
        {/* Explore Card */}
        <div className="bg-blue-600 px-6 md:px-10 py-3 rounded-lg flex flex-col items-center gap-4 w-fit shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col text-sm md:text-base items-center text-white font-serif leading-tight">
            <p>Cyber</p>
            <p>Security</p>
            <p>TRACK</p>
          </div>
          <h1 className="bg-white px-3 py-1 font-bold rounded-md text-blue-600 text-sm md:text-base hover:bg-gray-100 transition-colors">
            Explore
          </h1>
        </div>
        
        {/* Challenge Card */}
        <div className="bg-blue-800 px-6 md:px-10 py-3 rounded-lg flex flex-col items-center gap-4 w-fit shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col text-sm md:text-base items-center text-white font-serif leading-tight">
            <p>Cyber</p>
            <p>Security</p>
            <p>TRACK</p>
          </div>
          <h1 className="bg-white px-3 py-1 font-bold rounded-md text-blue-800 text-sm md:text-base hover:bg-gray-100 transition-colors">
            Challenge
          </h1>
        </div>
      </div>
    </div>

      {/* Activity Program Section */}
      <div className="py-20 px-4 mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              5-Day Activity Program
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From ancient codes to modern cybersecurity challenges.
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(programData).map((day) => {
              const dayNumber = Number.parseInt(day) as 1 | 2 | 3 | 4 | 5;
              return (
                <Button
                  key={day}
                  onClick={() => setSelectedDay(dayNumber)}
                  variant={selectedDay === dayNumber ? "default" : "outline"}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedDay === dayNumber
                      ? "bg-blue-700 text-white shadow-lg hover:bg-blue-800"
                      : "bg-white text-blue-800 border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  {programData[dayNumber].period}
                </Button>
              );
            })}
          </div>

          {/* Selected Day Activities */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                {programData[selectedDay].title}
              </h3>
              <div className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                {programData[selectedDay].period}
              </div>
            </div>

            <div
              className={`grid gap-8 ${getGridClasses(
                programData[selectedDay].activities.length
              )}`}
            >
              {programData[selectedDay].activities.map((activity, index) => (
                <Card
                  key={activity.id}
                  className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative flex flex-col items-center text-center p-8 pb-4">
                    <div className="p-4 rounded-2xl bg-blue-100 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-lg">
                      <activity.icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition-colors duration-300 mb-3">
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
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Testimonial/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
