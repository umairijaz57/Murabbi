import { Description } from "@/app/homeComponents";
import CenteredHeading from "@/app/homeComponents/centeredHeading";
import useIntersectionObserver from "@/hooks/onViewPort";
import Image from "next/image";

type Props = {
  title:string,
  description:string,
  link:string,
  date:string
};

function News({title,description,link,date}: Props) {
  const [headingRef, isVisible] = useIntersectionObserver();
  return (
    <>
      <div
      ref={headingRef}
      className={`flex my-4 text-center justify-center text-3xl md:text-4xl text-gray-900/90 font-extrabold transition duration-1000  ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      }`}
    >
      "{title.replace(/#/g, '')}"
    </div>
      <Description
        text={description}
      />
      <div className="text-sm text-gray-400 px-2 md:px-12">
        Publish date: {date}
      </div>
    </>
  );
}

export default News;
