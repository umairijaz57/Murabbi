import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { data: any };

const Results = (props: Props) => {
  
  return (
    <>
      {props.data.length === 0 ? (
        <div className="flex justify-center place-items-center p-10 bg-gray-200  h-64 text-2xl text-gray-600 font-bold ">
          {" "}
          No Search Results
        </div>
      ) : (
        <div>
          {props.data.map((item: any) => (
            <div key={item.id}>
              <div className="flex flex-col place-items-center gap-8 md:gap-16 p-8 md:flex-row my-4 rounded-2xl  shadow-md shadow-gray-400/40 " >
                <div className="min-w-40">
                  <div className=" w-28 h-28 ">
                    <Image
                      src={item.Image}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={`filter ${item.Category==='workshops'?'brightness-50 ':''}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "50% 30%",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col place-items-start gap-2">
                  <div className="text-lg text-blue-600 font-bold md:text-xl ">
                    {item.Title}
                  </div>
                  <div className="text-base text-justify">
                    {item.Description}
                  </div>
                  <div className="font-bold text-base">2 months</div>
                  <Link href={item.Link}>
                    <button className="py-3 px-6 w-36 md:mt-2 rounded-lg transition-all text-sm font-bold duration-500 border-2 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 border-blue-600 ">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Results;
