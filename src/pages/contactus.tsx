import React from "react";
import { Footer } from "../app/homeComponents";
import PageWrapper from "../app/layouts/pageLayout";
import InLayout from "../app/layouts/inlayout";
import Info from "../app/contactus/components/info";
import Form from "../app/contactus/components/Form";
import NewsLetter from "../app/contactus/components/newLetter";
import { Navbar } from "../app/homeComponents/NavbarL";

type Props = {};

const ContactUs = (props: Props) => {
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

export default ContactUs; 