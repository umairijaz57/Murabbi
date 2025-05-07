'use client'
import React, { useState, useEffect } from "react";
import NavBar from "../../homeComponents/navBar";
import Footer from "../../homeComponents/Footer";
import CompLayout from "../../layouts/layout";
import PageWrapper from "../../layouts/pageLayout";
import CenteredHeading from "../../homeComponents/centeredHeading";
import Results from "../components/results";
import courses from "@/app/data/courses";

type Props = {};

const Page = ({ params }: any) => {
  const [searchResults, setSearchResults] = useState<any>([]);
  const { id } = params;

  useEffect(() => {
    const decodedId = decodeURIComponent(id);
     const filteredResults = courses.filter((course: any) => {
      const courseNames = course.Names.map((name: string) => name.toLowerCase());
      return courseNames.some((name: string) =>
        name.includes(decodedId.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
  }, [id]);

  return (
    <>
      <NavBar />
      <PageWrapper>
        <CompLayout>
          <CenteredHeading text={`${searchResults.length} results for "${decodeURIComponent(id)}"`} />
          <Results data={searchResults} />
        </CompLayout>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Page;
