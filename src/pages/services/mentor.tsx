"use client";
import { Footer } from "@/app/homeComponents";
import { Navbar } from "@/app/homeComponents/NavbarL";
import Bootcamp from "@/app/mentor/Bootcamp";
import Internships from "@/app/mentor/Internships";
import ForeignLanguageCourses from "@/app/mentor/Languages";
export default function mentor() {
  

  return (
    <>
    <main className="min-h-screen bg-blue-50 pb-16">
      <Navbar />
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 py-8 px-12 md:px-0 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-blue-900 leading-tight">
                Mentoring Young Minds
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                This holistic program is designed to benefit college students
                aiming to join top ranked universities in Pakistan and abroad.
              </p>

              <blockquote className="text-xl text-gray-600 italic border-l-4 border-blue-300 pl-6">
                "When asking for directions, don't ask passersby; ask those who
                have entered the forest."
              </blockquote>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src="/mentor.jpg"
                  alt="Mentor Portrait"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      

    
        <Bootcamp />
        <Internships />
        <ForeignLanguageCourses />


      {/* <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Lunch with a NUSTIAN
          </h3>
          <p className="text-slate-600 leading-relaxed">
          Want to join the best university in the country? Meet the highest
          performing NUSTian. Discuss how to plan before joining NUST. If you
          have already joined, benefit from top performers for excelling in a
          competitive environment.
          </p>
      </div> */}
    </main>
      <Footer />
          </>
  );
}
