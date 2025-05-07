import React from "react";

type Props = {
  children: React.ReactNode;
};

const CourseLayout = (props: Props) => {
  return (
    <div>
      {" "}
      <main className="flex flex-col md:flex-row justify-evenly gap-8 lg:px-12 ">{props.children}</main>
    </div>
  );
};

export default CourseLayout;
