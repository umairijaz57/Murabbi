"use client";
import dynamic from "next/dynamic";
import {
  Background,
  Courses,
  Description,
  Info,
  Testimonials,
} from "./homeComponents";
import CenteredHeading from "./homeComponents/centeredHeading";
import Footer from "./homeComponents/Footer";
import HeroSlider from "./homeComponents/HeroSlider";
import InLayout from "./layouts/inlayout";
import PageWrapper from "./layouts/pageLayout";
import NewsList from "./news/components/NewsList";
import UpcomingEvent from "./homeComponents/upcomingevent";
import Testimonial from "./homeComponents/Testimonial";
import { Navbar } from "./homeComponents/NavbarL";

const CardSlider = dynamic(() => import("./homeComponents/CardSlide"), {
});

export default function Home() {
  return (
    <div className="relative">
      {/* <Update /> */}
      <Navbar />
      {/* <Hero /> */}
      <HeroSlider />
      <PageWrapper home={true}>
        {/* <InLayout upcoming={true}>
          <CenteredHeading text="Upcoming Event" />
          <UpcomingEvent />
        </InLayout> */}
        <InLayout offer={true}>
          <CenteredHeading text="Events & Updates" />
          <NewsList home />
        </InLayout>
        <InLayout>
          <Info />
        </InLayout>
        {/* <InLayout offer={true}>
          <Trainings />
        </InLayout> */}
        <InLayout>
          <CenteredHeading text="Best Courses" />
          <Description
            center
            text="Explore our top-rated courses here and equip yourself with the knowledge and skills you need for success."
          />
          <Courses />
        </InLayout>
        <Background />
        
        {/* <Background bg={true} /> */}
        <InLayout offer={true}>
          {/* <Testimonials /> */}
          <Testimonial />
        </InLayout>
        <InLayout>
          <CardSlider type="partner" />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}
