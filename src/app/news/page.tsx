"use client";
import NewsLetter from "../contactus/components/newLetter";
import { CenteredHeading, Footer } from "../homeComponents";
import { Navbar } from "../homeComponents/NavbarL";
import InLayout from "../layouts/inlayout";
import PageWrapper from "../layouts/pageLayout";
import Hero from "./components/Hero";
import NewsList from "./components/NewsList";

export default function page() {
  return (
    <>
    <Navbar />
      <Hero />
      <PageWrapper>
        <InLayout>
          <CenteredHeading text="What's New" />
          <NewsList />
        </InLayout>
        <InLayout offer>
          <NewsLetter />
        </InLayout>
      </PageWrapper>
      <Footer />
    </>
  );
}
