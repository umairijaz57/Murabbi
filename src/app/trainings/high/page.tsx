"use client"
import React from "react";
import PageWrapper from "../../layouts/pageLayout";
import InLayout from "@/app/layouts/inlayout";
import Hero from "../components/hero";
import { CourseDB } from "@/types/propsType";
import courses from "../../../utils/courses.json";
import {
  Courses,
  Description,
  Footer,
  Heading,
  NavBar,
} from "@/app/homeComponents";
import { Navbar } from "@/app/homeComponents/NavbarL";

async function getData() {
  return courses;
}

async function Page() {
  const courses: CourseDB[] = await getData();
  return (
    <div>
      <Navbar />
      <Hero
        image="/hero/hightech.jpg"
        heading="High Tech Trainings"
        text="From blockchain development and machine learning to embedded software and mobile app development, our programs cover the cutting-edge skills needed in today's digital world. Dive into deep learning, FPGA applications, PCB design, chip verification, and more. Gain expertise from industry-leading trainers and stay ahead of the curve in this rapidly evolving technological landscape. Unleash your potential and thrive in the world of high-tech with Murabbi's innovative training offerings."
      />
      <PageWrapper>
        <InLayout>
          <Heading text="Explore Our Courses!" />
          <Description text="We have a plethora of expertly crafted courses, that are tailored to match the modern-day requirements as well as your unique interests.
" />

          <Courses  category="high" page />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Page;
