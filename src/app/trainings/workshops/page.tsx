"use client";
import React from "react";
import PageWrapper from "../../layouts/pageLayout";
import InLayout from "@/app/layouts/inlayout";
import Hero from "../components/hero";
import courses from "../../../utils/courses.json";
import { CourseDB } from "@/types/propsType";
import {
  Courses,
  Description,
  Footer,
  Heading,
  NavBar,
} from "@/app/homeComponents";

async function getData() {
  return courses;
}

async function Page() {
  const courses: CourseDB[] = await getData();
  return (
    <div>
      <NavBar about />
      <Hero
        image="/hero/workshop.jpg"
        heading="Workshops"
        text="Our comprehensive workshops, encompassing various domains, such as testing and quality assurance, school leadership, and design thinking, are meticulously designed to impart a profound understanding of how to seamlessly integrate technological advancements into real-world applications. Through these workshops, participants gain invaluable insights into the core methodologies required to adapt and optimize technological innovations within their fields."
      />
      <PageWrapper>
        <InLayout>
          <Heading text="Explore Our Courses!" />
          <Description
            text="We have a plethora of expertly crafted courses, that are tailored to match the modern-day requirements as well as your unique interests.
"
          />

          <Courses category="workshops" page />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Page;
