import Link from "next/link";
import React from "react";

type Props = {};

const New = (props: Props) => {
  return (
    <div id="New">
      <div className=" p-6 text-white bg-blue-600 rounded-3xl ">
        <div className="py-5  md:py-5 md:px-5 rounded-lg my-4 md:my-2  ">
          <h2 className="text-lg md:text-2xl font-bold mb-4">AI Diploma!</h2>{" "}
          <p
            className="mb-4 text-base text-justify"
            style={{
              textAlign: "justify",
              hyphens: "auto",
              wordSpacing: "-0.5px",
            }}
          >
            We are thrilled to announce that the registrations for Professional
            Diploma in AI are open. Our AI Diploma program offers a
            comprehensive curriculum that combines theoretical foundations with
            engaging real-life projects. Register now and get hands-on training
            in ML, python and data statistics.
          </p>
          <Link href="https://pdcnust.eb-sites.com/PDAI" target="_blank">
            <button className=" transition-all duration-500 text-sm bg-white  text-blue-600 font-bold py-2 px-6 rounded-3xl hover:bg-blue-600 border-2 hover:text-white  hover:border-white ">
              Register Now
            </button>
          </Link>
        </div>
        <div className="py-5  md:py-5 md:px-5 rounded-lg my-4 md:my-2  ">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Blockchain Diploma
          </h2>
          <p
            className="mb-4 text-base text-justify"
            style={{
              textAlign: "justify",
              hyphens: "auto",
              wordSpacing: "-0.5px",
            }}
          >
            Announcing our professional blockchain Diploma! This program is
            designed to help the students navigate the world of blockchain,
            understanding the fundamentals behind this transformative technology
            while diving into it's applications. Register now and secure
            yourself a chance to understand the future of
            Information transaction.
          </p>
          <button className=" transition-all duration-500 text-sm bg-white  text-blue-600 font-bold py-2 px-6 rounded-3xl hover:bg-blue-600 border-2 hover:text-white  hover:border-white ">
            Register Now
          </button>
        </div>
        {/* <div className="py-5  md:py-5 md:px-5 rounded-lg ">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Div 3</h2>
          <p
            className="mb-4 text-base text-justify"
            style={{
              textAlign: "justify",
              hyphens: "auto",
              wordSpacing: "-0.5px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
          <button className=" transition-all duration-500 text-sm bg-white  text-blue-600 font-bold py-2 px-6 rounded-3xl hover:bg-blue-600 border-2 hover:text-white  hover:border-white ">
            Register Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default New;
