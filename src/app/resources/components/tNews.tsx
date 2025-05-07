import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/onScreen";
import { useEffect, useRef, useState } from "react";

type Props = {};

function Tnews({}: Props) {
  const CardSliderRef = useRef<HTMLDivElement | null>(null);
  const CardSliderRefValue = useOnScreen(CardSliderRef);
  const [isCardSliderRef, setIsCardSliderRef] = useState(false);
  useEffect(() => {
    if (!isCardSliderRef) setIsCardSliderRef(CardSliderRefValue);
  }, [CardSliderRefValue]);
  return (
    <div ref={CardSliderRef}>
      {isCardSliderRef && (
        <>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div>
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mr-2">Heading</h2>
                <a href="#">
                  <BsArrowRight />
                </a>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit
                amet, consectetur orem ipsum dolor sit amet, consectetur orem
                ipsum dolor sit amet, consectetur orem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed non risus. Suspendisse lectus
                tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                dolor.
              </p>
            </div>
          </motion.div> 
        </>
      )}
    </div>
  );
}

export default Tnews;
