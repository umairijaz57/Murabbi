import React, { useEffect, useState } from 'react'
import { students, TestimonialsSection } from './studentstestimonails'

export default function Bootcamp() {
    const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.3 }
        );
    
        const section = document.getElementById("profile-section");
        if (section) observer.observe(section);
    
        return () => observer.disconnect();
      }, []);


  return (
    <div id="profile-section" className="bg-blue-50 pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3
            className={`text-4xl font-bold text-blue-900 text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Profile Building Bootcamps
          </h3>

          <div className="flex justify-center items-end gap-8">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              }`}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="/summercamp/7.jpg"
                  alt="Profile Building Activity"
                  className="w-[500px] h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              }`}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="/summercamp/3.jpg"
                  alt="Bootcamp Session"
                  className="w-[500px] h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
            <TestimonialsSection testimonials={students} />
        </div>
      </div>
  )
}
