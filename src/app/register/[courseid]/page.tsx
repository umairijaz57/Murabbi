"use client";

import { Footer, NavBar } from "@/app/homeComponents";
import Form from "../components/form";

type Props = {};

const Registration = (props: Props) => {
  return (
    <>
      <NavBar about />
      <Form />
      <Footer />
    </>
  );
};

export default Registration;
