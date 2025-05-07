import React from "react";
import NavBar from "../homeComponents/navBar";
import PageWrapper from "../layouts/pageLayout";
import Header from "./components/Header";
import Section from "./components/Section";
import Criteria from "./components/Criteria";
import CenteredHeading from "../homeComponents/centeredHeading";
import Benefits from "./components/Benefits";
import Footer from "../homeComponents/Footer";

type Props = {};

function page({}: Props) {
  return (
    <>
      <NavBar />
      <div className="h-20"></div>  
      <PageWrapper>
        <div></div>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default page;
