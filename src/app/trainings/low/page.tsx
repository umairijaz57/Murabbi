"use client"
import React from "react";
import PageWrapper from "../../layouts/pageLayout";
import InLayout from "@/app/layouts/inlayout";
import Hero from "../components/hero";
import { Courses, Description, Footer, Heading, NavBar, } from "@/app/homeComponents";
import courses from "../../../utils/courses.json";
import { CourseDB } from "@/types/propsType";

async function getData() {
  return courses;
}

async function Page() {
  const courses: CourseDB[] = await getData();

  return (
    <div>
      <NavBar about />
      <Hero image="/hero/low-tech.jpg" heading="Low Tech Trainings" text="Unlock your creative potential with Murabbi's hands-on courses. Explore graphic design, UI/UX, video production, social media marketing, and more. Become a master in creativity and digital marketing, and open doors to new opportunities for success. Whether you're troubleshooting PCBs or delving into mechanical design, our courses equip you to make a real impact in the digital realm." />
      <PageWrapper>
      <InLayout>
          <Heading text="Explore Our Courses!" />
          <Description text="We have a plethora of expertly crafted courses, that are tailored to match the modern-day requirements as well as your unique interests.
" />

          <Courses  category="low" page />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Page;
