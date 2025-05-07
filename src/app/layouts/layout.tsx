import React from 'react';

interface Props {
    children:React.ReactNode
}

const CompLayout = (props: Props) => {
  return (
    <>
    <div >
       <main className='grid gap-8  m-auto py-8 px-[1rem] main overflow-x-hidden '>
        {props.children}
        </main>
    </div>
    </>
  )
}

export default CompLayout;
