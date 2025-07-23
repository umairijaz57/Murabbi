import React from "react";
import NavBar from "../homeComponents/navBar";
import PageWrapper from "../layouts/pageLayout";
import Header from "./components/Header";
import Section from "./components/Section";
import Criteria from "./components/Criteria";
import CenteredHeading from "../homeComponents/centeredHeading";
import Benefits from "./components/Benefits";
import Footer from "../homeComponents/Footer";
import { Navbar } from "../homeComponents/NavbarL";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Navbar />
      <div className="h-20"></div>  
      <PageWrapper>
        <div></div>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default page;
