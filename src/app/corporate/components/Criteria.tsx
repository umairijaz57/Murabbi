import React from "react";

type Props = {};

export default function Criteria({}: Props) {
  return (
    <div className="flex flex-col md:flex-row p-8 gap-4 text-white">
      <div className="w-full md:w-1/2 bg-blue-600  md:flex md:flex-col p-6 rounded-2xl h-72">
        <div className="flex flex-col h-full">
          <div>
            <h1 className="text-3xl font-bold text-center">Heading 1</h1>
          </div>
          <div>
            <div className="mt-8 text-left flex flex-col ">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>

              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-blue-600 md:flex md:flex-col p-6 rounded-2xl h-72">
        <div className="flex flex-col h-full">
          <div>
            <h1 className="text-3xl font-bold text-center">Heading 2</h1>
          </div>
          <div>
            <div className="mt-8 text-left flex flex-col ">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                repellendus iusto
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
