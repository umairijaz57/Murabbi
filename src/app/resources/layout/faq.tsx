import React from "react";

interface Props {
  children: React.ReactNode;
}

const FaqLayout = (props: Props) => {
  return (
    <>
      <div className="bg-white">
        <main
          className={`grid overflow-hidden gap-8  m-auto  overflow-y-hidden   main-faq relative px-4 sm:px-8 lg:pl-16 lg:pr-0 p py-16 md:pt-28 md:pb-0 "
          }  `}
        >
          {props.children}
        </main>
      </div>
    </>
  );
};

export default FaqLayout;
