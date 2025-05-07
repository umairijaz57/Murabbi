"use client";
import React from "react";
import { NavBar, Events, Footer, CenteredHeading } from "../homeComponents";
import PageWrapper from "../layouts/pageLayout";
import InLayout from "../layouts/inlayout";
import Hero from "./components/hero";
import NewsLetter from "../contactus/components/newLetter";

const page = () => {
  return (
    <div>
      <NavBar about page="News" />
      <Hero />
      <PageWrapper>
        <InLayout>
          <CenteredHeading text="What's New" />
          <Events />
        </InLayout>
        <InLayout offer>
          <NewsLetter />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default page;
