"use client";

import { Footer, NavBar } from "@/app/homeComponents";
import Form from "../components/form";
import { Navbar } from "@/app/homeComponents/NavbarL";

type Props = {};

const Registration = (props: Props) => {
  return (
    <>
    <Navbar />
      <Form />
      <Footer />
    </>
  );
};

export default Registration;
