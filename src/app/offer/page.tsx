"use client";
import React from "react";
import {
  NavBar,
  Footer,
  CenteredHeading,
  Courses,
  Description,
} from "../homeComponents";
import Training from "./components/Training";
import CardContainer from "./components/Card";
import PageWrapper from "../layouts/pageLayout";
import { Offer, courseData } from "../../types/propsType";
import InLayout from "../layouts/inlayout";
import Grid from "./components/Grid";

async function getData() {
  const offers: Offer[] = [
    {
      id: 2,
      Title: "High Tech Training",
      Link: "/trainings/high",
      Image: "/offers/offer-4.png",
      Description:
        "Expand your technical expertise with cutting-edge courses covering emerging technologies, such as blockchain development, machine learning, embedded software, and deep learning, to stay ahead in the fast-paced world of high technology",
    },
    {
      id: 3,
      Title: "Low Tech Training",
      Link: "/trainings/low",
      Image: "/offers/offer-low.png",
      Description:
        "Expand your technical expertise with cutting-edge courses covering emerging technologies, such as blockchain development, machine learning, embedded software, and deep learning, to stay ahead in the fast-paced world of high technology",
    },
    {
      id: 4,
      Title: "Summer Schools",
      Link: "/trainings/summer-courses",
      Image: "/offers/offer-5.png",
      Description:
        "Expand your technical expertise with cutting-edge courses covering emerging technologies, such as blockchain development, machine learning, embedded software, and deep learning, to stay ahead in the fast-paced world of high technology",
    },
    {
      id: 4,
      Title: "Workshops",
      Link: "/trainings/summer-courses",
      Image: "/offers/offer-5.png",
      Description:
        "Expand your technical expertise with cutting-edge courses covering emerging technologies, such as blockchain development, machine learning, embedded software, and deep learning, to stay ahead in the fast-paced world of high technology",
    },
  ];
  return offers;
}

async function getCourseData() {
  try {
    const response = await fetch("https://murabbi.io/api/course");
    const courses = await response.json(); // Assuming the server returns JSON dat
    return courses;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
async function page() {
  const data:any = await getCourseData();
  return (
    <div>
      <NavBar page="Trainings" />
      <Grid />
      <PageWrapper>
        <InLayout>
          <CenteredHeading text="Best Courses" />
          <Description text="Explore our top-rated courses here and equip yourself with the knowledge and skills you need for success." />
          {/* <CardContainer offers={data} home={true} /> */}
          <Courses   />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default page;
