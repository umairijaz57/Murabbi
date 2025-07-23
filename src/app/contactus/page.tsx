"use client";
import React from "react";
import { NavBar, Footer } from "../homeComponents";
import PageWrapper from "@/app/layouts/pageLayout";
import InLayout from "@/app/layouts/inlayout";
import Info from "./components/info";
import Form from "./components/Form";
import NewsLetter from "./components/newLetter";
import { Navbar } from "../homeComponents/NavbarL";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <InLayout>
          <Info />
        </InLayout>
        <Form />
        <InLayout offer={true}>
          <NewsLetter />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Page;
