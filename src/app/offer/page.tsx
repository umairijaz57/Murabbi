"use client";
import { useEffect, useState } from "react";
import { Offer } from "../../types/propsType";
import {
  CenteredHeading,
  Courses,
  Description,
  Footer,
} from "../homeComponents";
import InLayout from "../layouts/inlayout";
import PageWrapper from "../layouts/pageLayout";
import Grid from "./components/Grid";
import { Navbar } from "../homeComponents/NavbarL";

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
      Link: "/trainings/summer-winter-camps",
      Image: "/offers/offer-5.png",
      Description:
        "Expand your technical expertise with cutting-edge courses covering emerging technologies, such as blockchain development, machine learning, embedded software, and deep learning, to stay ahead in the fast-paced world of high technology",
    },
    {
      id: 4,
      Title: "Workshops",
      Link: "/trainings/summer-winter-camps",
      Image: "/offers/offer-5.png",
      Description:
        "Expand your technical expertise with cutting-edge courses covering emerging technologies, such as blockchain development, machine learning, embedded software, and deep learning, to stay ahead in the fast-paced world of high technology",
    },
  ];
  return offers;
}

function page() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://murabbi.io/api/course");
        const json = await res.json();
        setCourses(json);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <Navbar />
      <Grid />
      <PageWrapper>
        <InLayout>
          <CenteredHeading text="Best Courses" />
          <Description text="Explore our top-rated courses here and equip yourself with the knowledge and skills you need for success." />
          {/* <CardContainer offers={data} home={true} /> */}
          <Courses />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default page;
