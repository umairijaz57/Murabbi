import React, { useState } from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Typewriter from 'typewriter-effect';

const SummerCampSection = () => {
  const [selectedPoster, setSelectedPoster] = useState(0);

  const campData = {
    title: "Adventure Awaits Summer Camp 2025",
    subtitle: "Tech Bootcamps & Learning Adventures for All Ages",
    date: "June 16 - July 25, 2025",
    time: "10:00 AM - 1:00 PM / 4:00 PM",
    location: "NUST-SEECS H-12",
    ageGroup: "Ages 4-18",
    duration: "3 Weeks Program",
  };

  const posters = [
    { id: 1, url: "/summercamp/1.jpg", alt: "Adventure Awaits Summer Camp", title: "Summer Camp Overview" },
    { id: 2, url: "/summercamp/2.jpg", alt: "", title: "" },
    { id: 3, url: "/summercamp/3.jpg", alt: "AI-nstein's Lab", title: "AI Bootcamp" },
    { id: 4, url: "/summercamp/4.jpg", alt: "SPY vs SPY", title: "Cybersecurity" },
    { id: 5, url: "/summercamp/7.jpg", alt: "Game Development", title: "Game Dev" },
    { id: 6, url: "/summercamp/6.jpg", alt: "Build A Bot", title: "Robotics" },
    { id: 7, url: "/summercamp/5.jpg", alt: "Dare2Lead Experience", title: "Leadership" },
  ];

  const highlights = [
    "AI & Machine Learning",
    "Robotics & IoT",
    "Cybersecurity",
    "Game Development",
    "Leadership Training",
    "Arts & Crafts",
  ];

  const renderPosters = (list: typeof posters) => (
    <div className="relative">
      <div className="relative mb-4">
        <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-white max-w-sm mx-auto">
          <img
            src={list[selectedPoster]?.url}
            alt={list[selectedPoster]?.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
          {selectedPoster + 1} / {list.length}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-1 max-w-sm mx-auto">
        {list.map((poster, index) => (
          <button
            key={poster.id}
            onClick={() => setSelectedPoster(index)}
            className={`aspect-[4/5] rounded overflow-hidden transition-all duration-200 border ${
              selectedPoster === index
                ? "border-blue-500 shadow-md ring-2 ring-blue-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <img
              src={poster.url}
              alt={poster.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );

  const tab1Posters = posters.slice(0, 2);
  const tab2Posters = posters.slice(2);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-2 text-3xl font-bold text-blue-600 mb-2">
            <h2 className="">{campData.title}</h2>
            <Typewriter
              options={{
                strings: ['Slot 1', 'Slot 2'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-lg text-black max-w-xl mx-auto">{campData.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">Duration</h3>
                <p className="text-black text-xs">{campData.date}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Clock className="w-5 h-5 text-green-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">Time</h3>
                <p className="text-black text-xs">{campData.time}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <MapPin className="w-5 h-5 text-red-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">Location</h3>
                <p className="text-black text-xs">{campData.location}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Users className="w-5 h-5 text-purple-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">Age Group</h3>
                <p className="text-black text-xs">{campData.ageGroup}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-black mb-3">What We Offer</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {highlights.map((activity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-black">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Contact & Registration</h3>
              <div className="space-y-1 text-xs text-blue-700">
                <p>📞 +92 3331555665</p>
                <p>✉️ murabbi.socials@gmail.com</p>
              </div>
            </div>

            <a
              target="_blank"
              href="https://forms.gle/nw5d9cefwNWadNzx8"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

         <Tabs defaultValue="age">
            <TabsList className="flex justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 p-1 rounded-full shadow-lg w-fit mx-auto">
              <TabsTrigger value="age" className="px-5 py-2 text-sm font-semibold text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-xl rounded-full transition-all duration-300">Age 4-16</TabsTrigger>
              <TabsTrigger value="olevel" className="px-5 py-2 text-sm font-semibold text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-xl rounded-full transition-all duration-300">O-Level</TabsTrigger>
            </TabsList>
            <TabsContent value="age">{renderPosters(tab1Posters)}</TabsContent>
            <TabsContent value="olevel">{renderPosters(tab2Posters)}</TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SummerCampSection;
