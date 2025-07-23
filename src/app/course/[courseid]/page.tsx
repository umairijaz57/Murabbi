"use client";
import NavBar from "@/app/homeComponents/navBar";
import PageWrapper from "@/app/layouts/pageLayout";
import React from "react";
import Footer from "@/app/homeComponents/Footer";
import InLayout from "@/app/layouts/inlayout";
import { CourseDB, Offer, courseInfo } from "@/types/propsType";
import CourseLayout from "../components/Layout";
import LeftComp from "../components/LeftComp";
import RightComp from "../components/RightComp";
import { useParams } from "next/navigation";
import courses from "../../../utils/courses.json";
import { Navbar } from "@/app/homeComponents/NavbarL";

type Props = {};

async function getData(id: string) {
  try {
    return courses.find((course) => {
      return course._id === id;
    });
  } catch (error) {
    console.error("An error occurred", error);
    throw error;
  }
}

async function Course({ params }: { params: { courseid: string } }) {
  const course: CourseDB | undefined = await getData(params.courseid);

  return (
    <div>
      <Navbar />
      <PageWrapper>
        <InLayout>
          <CourseLayout>
            <LeftComp data={course} />
            <RightComp data={course} />
          </CourseLayout>
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Course;
