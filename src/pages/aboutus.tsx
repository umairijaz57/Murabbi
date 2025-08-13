import React from "react";
import {
    Footer,
    CenteredHeading,
    Description,
    Background,
    Testimonials,
    Slider,
    CardSlider,
    Heading,
} from "../app/homeComponents";

import Values from "../app/aboutus/components/values";
import PageWrapper from "../app/layouts/pageLayout";
import InLayout from "../app/layouts/inlayout";
import OurBackground from "../app/aboutus/components/background";
import Hero from "../app/aboutus/components/hero";
import FaqLayout from "../app/resources/layout/faq";
import Faq from "../app/resources/components/Faq";
import Ambition from "../app/aboutus/components/Ambition";
import { Navbar } from "../app/homeComponents/NavbarL";
import Testimonial from "../app/homeComponents/Testimonial";
import Team from "@/app/aboutus/components/team";

type Props = {};

const items = [
    {
        id: 3,
        title: "Dr. Abid Rafique",
        description: "Executive Founder",
        image: "/aboutus/Abid.jpg",
        link: "https://www.linkedin.com/in/dr-abid-rafique-9b678a225/",
        mail: "abid.rafique@seecs.edu.pk",
    },
    {
        id: 4,
        title: "Dr. Nazia Perwaiz",
        description: "Chief Executive Officer & Co. Founder",
        description1: "Assistant Professor (SEECS)",
        image: "/aboutus/naziapervez.jpg",
        link: "https://www.linkedin.com/in/nazia-perwaiz-738b5283/",
        mail: "nazia.perwaiz@seecs.edu.pk",
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
            {/* <Hero /> */}
            <Team />
            <Footer />
        </div>
    );
};

export default AboutUs; 