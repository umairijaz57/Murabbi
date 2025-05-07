import React from "react";

type Props = {
  children: React.ReactNode;
  home?: boolean;
};

const PageWrapper = (props: Props) => {
  return (
    <div
      className={`opacity-0 transition-all duration-1000 ease-in-out animate-slide-in-from-bottom`}
      style={{ transitionDelay: "0.1 s" }}
    >
      {props.children}
    </div>
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0, y: 60}}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 9, y: 0 }}
    //     transition={{delay:0.5}}
    //   >
    //     {props.children}
    //   </motion.div>
    // </AnimatePresence>
  );
};

export default PageWrapper;
