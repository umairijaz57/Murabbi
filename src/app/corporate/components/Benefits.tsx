import CenteredHeading from "@/app/homeComponents/centeredHeading";
import React from "react";

type Props = {};

function Benefits({}: Props) {
  return (
    <>
      <CenteredHeading text="Benefits" />
      <div className="flex flex-col md:flex-wrap justify-center items-center gap-4 text-blue-600">
        <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-full md:w-1/2 p-4 shadow border-2 rounded-xl flex items-center hover:bg-gray-100 cursor-pointer">
            <div className="w-16 h-12 bg-gray-300 rounded-full flex justify-center items-center mr-4">
              <img
                src="/hero.jpg"
                alt="Image 1"
                className="w-16 h-12 rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Heading 1</h2>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur,{" "}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 shadow border-2 rounded-xl flex items-center hover:bg-gray-100 cursor-pointer">
            <div className="w-16 h-12 bg-gray-300 rounded-full flex justify-center items-center mr-4">
              <img
                src="/hero.jpg"
                alt="Image 1"
                className="w-16 h-12 rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Heading 1</h2>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur,{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-full md:w-1/2 p-4 shadow border-2 rounded-xl flex items-center hover:bg-gray-100 cursor-pointer">
            <div className="w-16 h-12 bg-gray-300 rounded-full flex justify-center items-center mr-4">
              <img
                src="/hero.jpg"
                alt="Image 1"
                className="w-16 h-12 rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Heading 1</h2>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur,{" "}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 shadow border-2 rounded-xl flex items-center hover:bg-gray-100 cursor-pointer">
            <div className="w-16 h-12 bg-gray-300 rounded-full flex justify-center items-center mr-4">
              <img
                src="/hero.jpg"
                alt="Image 1"
                className="w-16 h-12 rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Heading 1</h2>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur,{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
