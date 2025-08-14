import dynamic from "next/dynamic";
import {
    Background,
    Courses,
    Description,
    Info,
    Testimonials,
} from "../app/homeComponents";
import CenteredHeading from "../app/homeComponents/centeredHeading";
import Footer from "../app/homeComponents/Footer";
import HeroSlider from "../app/homeComponents/HeroSlider";
import InLayout from "../app/layouts/inlayout";
import PageWrapper from "../app/layouts/pageLayout";
import NewsList from "../app/news/components/NewsList";
import UpcomingEvent from "../app/homeComponents/upcomingevent";
import Testimonial from "../app/homeComponents/Testimonial";
import { Navbar } from "../app/homeComponents/NavbarL";
import OurMission from "@/app/homeComponents/OurMission";
import NewsSection from "@/app/homeComponents/News";

const CardSlider = dynamic(() => import("../app/homeComponents/CardSlide"), {
});

export default function Home() {
    return (
        <div className="relative">
            {/* <Update /> */}
            <Navbar />
            <OurMission />
            {/* <Hero /> */}
            {/* <HeroSlider /> */}
            <PageWrapper home={true}>
                {/* <InLayout upcoming={true}>
          <CenteredHeading text="Upcoming Event" />
          <UpcomingEvent />
        </InLayout> */}
                {/* <InLayout offer={true}>
                    <CenteredHeading text="News & Updates" />
                    <NewsList home />
                </InLayout> */}
                <NewsSection />
                {/* <InLayout>
                    <Info />
                </InLayout> */}
                {/* <InLayout offer={true}>
          <Trainings />
        </InLayout> */}
                {/* <InLayout>
                    <CenteredHeading text="Best Courses" />
                    <Description
                        center
                        text="Explore our top-rated courses here and equip yourself with the knowledge and skills you need for success."
                    />
                    <Courses />
                </InLayout> */}
                {/* <Background /> */}

                {/* <Background bg={true} /> */}
                {/* <InLayout offer={true}>
                    <Testimonial />
                </InLayout> */}
                <InLayout>
                    <CardSlider type="partner" />
                </InLayout>
            </PageWrapper>
            <Footer />
        </div>
    );
} 