import React from 'react';
import { SlidingDiv } from './SlidingDiv';

type HeaderProps = {
  Course: string;
};

export default function Header({ Course }: HeaderProps) {
  return (
    <div className='bg-blue-800 flex justify-center items-center p-8 md:p-16 lg:p-24'>
      <SlidingDiv direction="left">
        <h1 className="font-bold text-4xl text-white md:text-6xl lg:text-8xl">{Course}</h1>
        <br /><br /><hr />
      </SlidingDiv>
    </div>
  );
}
