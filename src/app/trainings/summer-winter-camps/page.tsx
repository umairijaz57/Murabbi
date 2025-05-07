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
      <Hero
      image="/hero/summer.jpg"
        heading="Summer/ Winter Camps"
        text="Our diverse range of programs is designed to engage young minds and ignite their passion for knowledge. From the STEAM Bootcamp, where creativity and innovation converge, to the AI Bootcamp for kids, introducing them to the fascinating world of artificial intelligence, our Summer Schools offer exciting opportunities for growth. Join us for an unforgettable summer of discovery at Murabbi."
      />
      <PageWrapper>
      <InLayout>
          <Heading text="Explore Our Courses!" />
          <Description text="We have a plethora of expertly crafted courses, that are tailored to match the modern-day requirements as well as your unique interests.
" />

          <Courses category="summer" page />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Page;
