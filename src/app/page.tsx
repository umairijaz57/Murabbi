"use client";
import dynamic from "next/dynamic";
import {
  Background,
  Courses,
  Description,
  Info,
  NavBar,
  Testimonials,
  Trainings,
} from "./homeComponents";
import CenteredHeading from "./homeComponents/centeredHeading";
import Footer from "./homeComponents/Footer";
import HeroSlider from "./homeComponents/HeroSlider";
import InLayout from "./layouts/inlayout";
import PageWrapper from "./layouts/pageLayout";
import NewsList from "./news/components/NewsList";

const CardSlider = dynamic(() => import("./homeComponents/CardSlide"), {
  suspense: true,
});

export default async function Home() {
  return (
    <div className="relative">
      {/* <Update /> */}
      <NavBar page="Home" home={true} />
      {/* <Hero /> */}
      <HeroSlider />
      <PageWrapper home={true}>
        <InLayout offer={true}>
          <CenteredHeading text="Events & Updates" />
          <NewsList home />
        </InLayout>
        <InLayout>
          <Info />
        </InLayout>
        <InLayout offer={true}>
          <Trainings />
        </InLayout>
        <InLayout>
          <CenteredHeading text="Best Courses" />
          <Description
            center
            text="Explore our top-rated courses here and equip yourself with the knowledge and skills you need for success."
          />
          <Courses />
        </InLayout>
        <Background />
        <InLayout>
          <CardSlider type="partner" />
        </InLayout>
        <Background bg={true} />
        <InLayout offer={true}>
          <Testimonials />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}
