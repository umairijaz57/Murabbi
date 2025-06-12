import React, { useState } from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const SummerCampSection = () => {
  const [selectedPoster, setSelectedPoster] = useState(0);

  // Summer camp data based on your posters
  const campData = {
    title: "Adventure Awaits Summer Camp 2025",
    subtitle: "Tech Bootcamps & Learning Adventures for All Ages",
    date: "June 16 - July 25, 2025",
    time: "10:00 AM - 1:00 PM / 4:00 PM",
    location: "NUST-SEECS H-12",
    ageGroup: "Ages 4-18",
    duration: "3 Weeks Program",
  };

  // Your actual camp posters - you'll need to upload these images and replace the URLs
  const posters = [
    {
      id: 1,
      url: "/summercamp/1.jpg", // Replace with actual summer camp poster
      alt: "Adventure Awaits Summer Camp",
      title: "Summer Camp Overview",
    },
    {
      id: 2,
      url: "/summercamp/3.jpg", // Replace with AI bootcamp poster
      alt: "AI-nstein's Lab",
      title: "AI Bootcamp",
    },
    {
      id: 3,
      url: "/summercamp/4.jpg", // Replace with cybersecurity poster
      alt: "SPY vs SPY",
      title: "Cybersecurity",
    },
    {
      id: 4,
      url: "/summercamp/7.jpg", // Replace with game dev poster
      alt: "Game Development",
      title: "Game Dev",
    },
    {
      id: 5,
      url: "/summercamp/6.jpg", // Replace with robotics poster
      alt: "Build A Bot",
      title: "Robotics",
    },
    {
      id: 6,
      url: "/summercamp/5.jpg", // Replace with leadership poster
      alt: "Dare2Lead Experience",
      title: "Leadership",
    },
    {
      id: 7,
      url: "/summercamp/2.jpg", // Replace with leadership poster
      alt: "",
      title: "",
    },
  ];

  const highlights = [
    "AI & Machine Learning",
    "Robotics & IoT",
    "Cybersecurity",
    "Game Development",
    "Leadership Training",
    "Arts & Crafts",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            {campData.title}
          </h2>
          <p className="text-lg text-black max-w-xl mx-auto">
            {campData.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Compact camp details */}
          <div className="space-y-4">
            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">
                  Duration
                </h3>
                <p className="text-black text-xs">{campData.date}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Clock className="w-5 h-5 text-green-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">Time</h3>
                <p className="text-black text-xs">{campData.time}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <MapPin className="w-5 h-5 text-red-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">
                  Location
                </h3>
                <p className="text-black text-xs">{campData.location}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Users className="w-5 h-5 text-purple-600 mb-2" />
                <h3 className="font-semibold text-black text-sm mb-1">
                  Age Group
                </h3>
                <p className="text-black text-xs">{campData.ageGroup}</p>
              </div>
            </div>

            {/* Activities highlight */}
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

            {/* Contact info */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">
                Contact & Registration
              </h3>
              <div className="space-y-1 text-xs text-blue-700">
                <p>📞 +92 3331555665</p>
                <p>✉️ murabbi.socials@gmail.com</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=murabbi.socials@gmail.com&su=Event%20Registration&body=I%20would%20like%20to%20register."
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side - Compact poster gallery */}
          <div className="relative">
            {/* Main poster display */}
            <div className="relative mb-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-white max-w-sm mx-auto">
                <img
                  src={posters[selectedPoster].url}
                  alt={posters[selectedPoster].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                {selectedPoster + 1} / {posters.length}
              </div>

              {/* Poster title */}
            </div>

            {/* Compact poster thumbnails */}
            <div className="grid grid-cols-6 gap-1 max-w-sm mx-auto">
              {posters.map((poster, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default SummerCampSection;
