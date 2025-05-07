"use client";
import PageWrapper from "@/app/layouts/pageLayout";
import React from "react";
import News from "../components/news";
import HImage from "../components/image";
import InLayout from "@/app/layouts/inlayout";
import { CenteredHeading, Events, Footer, NavBar } from "@/app/homeComponents";
import { NewsDB } from "@/types/propsType";
import news from "../../../utils/news.json";

async function getData(id: string) {
  try {
    return news.find((news) => {
      return news._id === id;
    });
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function page({ params }: { params: { id: string } }) {

  const CurrentNews: NewsDB | any = await getData(params.id);

  return (
    <div>
      <NavBar />
      <HImage Image={CurrentNews.Image} />
      <PageWrapper>
        <InLayout>
          <News
            title={CurrentNews.Title}
            description={CurrentNews.Description}
            link={CurrentNews.Link}
            date={CurrentNews.Date}
          />
        </InLayout>
        <InLayout offer={true}>
          <CenteredHeading text="Other News" />
          <Events />
        </InLayout>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default page;
