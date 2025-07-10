"use client";
import { AccordionItem } from "@/components/ui/accordion";
import {
  Award,
  BookOpen,
  Brain,
  Building,
  Check,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";
import SteamCampAccordions from "./components/Accordion";
import { motion } from "framer-motion";
import { Footer, NavBar } from "../homeComponents";
export default function Page() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
    <NavBar />
      <motion.div
        className="text-white bg-gradient-to-r from-blue-600 to-blue-400 flex flex-col justify-center items-center py-16 md:py-24 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="font-bold text-4xl md:text-6xl py-4 text-center"
          variants={childVariants}
        >
          STEAM CAMP
        </motion.h1>
        <motion.h3
          className="font-semibold text-gray-200 text-xl md:text-3xl text-center"
          variants={childVariants}
        >
          Igniting Innovation Through
        </motion.h3>
        <motion.h3
          className="font-semibold text-gray-200 text-xl md:text-3xl text-center"
          variants={childVariants}
        >
          Science • Technology • Engineering • Arts
        </motion.h3>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 px-4 md:px-12 lg:px-24 xl:px-48 py-8 md:py-14">
        <motion.h1 className="font-bold text-3xl md:text-4xl text-blue-900 text-center md:text-left" variants={childVariants}>
          About Our STEAM Camp
        </motion.h1>

        {/* Description Section */}
        <motion.div variants={childVariants} className="flex flex-col gap-4 py-6 md:py-10">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Murabbi, our STEAM Camp is where creativity meets technology.
            Designed especially for young learners, our camp introduces children
            to exciting fields like Robotics, Artificial Intelligence,
            Information Security, and Calligraphy — all through fun,
            age-appropriate, hands-on activities.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We don't just teach, we ignite curiosity — encouraging kids to
            explore, build, break, imagine, and express themselves freely. Our
            unique blend of tech and art prepares students not just for the
            future, but to shape it.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Led by passionate educators and experts, we ensure every child
            experiences a safe, inspiring, and empowering environment where
            learning feels like play — and discovery never ends.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="space-y-6 md:space-y-8 mt-8">
          {/* Feature 1 */}
          <div className="flex gap-4 items-start pb-6 border-b-2 border-orange-400">
            <div className="flex-shrink-0 mt-1">
              <div className="h-4 w-4 rounded-full bg-blue-900 flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-gray-900">Learn by Doing:</span>{" "}
                From building robots to experimenting with simple AI tools, we
                emphasize hands-on learning that fuels curiosity and confidence.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 items-start pb-6 border-b-2 border-orange-400">
            <div className="flex-shrink-0 mt-1">
              <div className="h-4 w-4 rounded-full bg-blue-900 flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-gray-900">
                  Future Skills, Today:
                </span>{" "}
                We introduce students to next-generation fields like Information
                Security, Robotics, and Artificial Intelligence — adapted to be
                age-appropriate, fun, and meaningful.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 items-start pb-6 border-b-2 border-orange-400">
            <div className="flex-shrink-0 mt-1">
              <div className="h-4 w-4 rounded-full bg-blue-900 flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-gray-900">
                  Creative Expression Matters:
                </span>{" "}
                Whether it's digital art or traditional calligraphy, we
                encourage kids to express themselves and build confidence
                through creative outlets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SteamCampAccordions />
      <Footer />
    </>
  );
}
