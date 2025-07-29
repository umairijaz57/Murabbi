"use client";
import React from "react";
import { Events, Footer, CenteredHeading } from "../homeComponents";
import PageWrapper from "../layouts/pageLayout";
import InLayout from "../layouts/inlayout";
import Hero from "./components/hero";
import NewsLetter from "../contactus/components/newLetter";
import { Navbar } from "../homeComponents/NavbarL";

const page = () => {
  return (
    <div>
      <Navbar />
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
