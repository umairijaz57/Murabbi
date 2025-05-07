import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import Tnews from './tNews'

type Props = {}

const Trending = (props: Props) => {
  return (
    <div>
        <div className="flex flex-col gap-4 items-center justify-center mx-auto  px-4 py-8">
          
          <Tnews/>
          <hr className="border-gray-300 w-full" />
          <Tnews/>
          <hr className="border-gray-300 w-full" />
          <Tnews/>
          <hr className="border-gray-300 w-full" />
          
      </div>
    </div>
  )
}

export default Trending