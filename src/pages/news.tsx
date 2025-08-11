import NewsLetter from "../app/contactus/components/newLetter";
import { CenteredHeading, Footer } from "../app/homeComponents";
import { Navbar } from "../app/homeComponents/NavbarL";
import InLayout from "../app/layouts/inlayout";
import PageWrapper from "../app/layouts/pageLayout";
import Hero from "../app/news/components/Hero";
import NewsList from "../app/news/components/NewsList";

export default function News() {
    return (
        <>
            <Navbar />
            <Hero />
                    <NewsList />
            <Footer />
        </>
    );
} 