import React from 'react'

type Props = {}

function Section({}: Props) {
  return (
    <div className="flex flex-col md:flex-row bg-blue-600 text-white p-8 md:h-96 gap-4">
      <div className="w-full md:w-1/4 md:flex md:flex-col">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-3xl font-bold">Eligibility Criteria</h1>
        </div>
      </div>
      <div className="w-full md:w-3/4 ">
        <div className="flex flex-col md:flex-row justify-evenly items-center h-full">
          <div className="flex flex-col justify-center place-items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-2"></div>
            <h2 className="text-lg font-semibold">Heading 1</h2>
            <p className="">Description 1</p>
          </div>
          <div className="flex flex-col justify-center place-items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-2"></div>
            <h2 className="text-lg font-semibold">Heading 2</h2>
            <p className="">Description 2</p>
          </div>
          <div className="flex flex-col justify-center place-items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-2"></div>
            <h2 className="text-lg font-semibold">Heading 3</h2>
            <p className="">Description 3</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section