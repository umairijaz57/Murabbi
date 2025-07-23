"use client";
import React from "react";
import {
  NavBar,
  Footer,
  CenteredHeading,
  Description,
  Background,
  Testimonials,
  Slider,
  CardSlider,
  Heading,
} from "../homeComponents";

import Values from "./components/values";
import PageWrapper from "../layouts/pageLayout";
import InLayout from "../layouts/inlayout";
import OurBackground from "./components/background";
import Hero from "./components/hero";
import FaqLayout from "../resources/layout/faq";
import Faq from "../resources/components/Faq";
import Ambition from "./components/Ambition";
import { Navbar } from "../homeComponents/NavbarL";

type Props = {};

const items = [
  {
    id: 3,
    title: "Dr. Nazia Perwaiz",
    description: "Chief Executive Officer ",
    description1: "Assistant Professor (SEECS)",
    image: "/aboutus/Nazia.jpg",
    link: "https://www.linkedin.com/in/nazia-perwaiz-738b5283/",
    mail: "nazia.perwaiz@seecs.edu.pk",
  },
  {
    id: 4,
    title: "Dr. Abid Rafique",
    description: "Executive Founder",
    description1: "Assistant Professor (SEECS)",
    image: "/aboutus/Abid.jpg",
    link: "https://www.linkedin.com/in/dr-abid-rafique-9b678a225/",
    mail: "abid.rafique@seecs.edu.pk",
  },
  {
    id: 2,
    title: "Dr. Syed Taha Ali",
    description: "Co. Founder",
    description1: "Assistant Professor (SEECS)",
    image: "/instructors/DrSyedTahaAli.jpg",
    link: "https://www.linkedin.com/in/syed-taha-ali-5a030a65",
    mail: "taha.ali@seecs.edu.pk",
  },
  {
    id: 1,
    title: "Dr. Wajahat Hussain",
    description: "Co. Founder",
    description1: "Assistant Professor (SEECS)",
    image: "/instructors/Dr.WajahatHussain.jpg",
    link: "",
    mail: "wajahat.hussain@seecs.edu.pk",
  },
];
const AboutUs = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PageWrapper>
        <InLayout offer>
          <Ambition />
        </InLayout>
        <InLayout>
          <OurBackground />
        </InLayout>
        <div id="history-section">
        <InLayout offer>
          <CenteredHeading text="Meet Our Team" />
          <Description
            center
            text="Meet the passionate and experienced individuals who drive Murabbi's educational excellence and innovation."
          />
          <Slider items={items} />
        </InLayout>
        </div>
        <div id="teams-section">
          <InLayout>
            <CenteredHeading text="Our Values" />
            <Values />
          </InLayout>
        </div>
        <Background bg aboutus />
        <InLayout>
          <CardSlider type="partner" />
        </InLayout>
        <div id="partners-section">
          <InLayout offer>
            <Testimonials />
          </InLayout>
        </div>
        <div id="faq">
          <FaqLayout>
            <Heading text="Get Your Answers" />
            <Faq />
          </FaqLayout>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default AboutUs;
