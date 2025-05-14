import useIntersectionObserver from "@/hooks/onViewPort";
import { NewsDB } from "@/types/propsType";
import Image from "next/image";
import Link from "next/link";
const NewsCard = ({ item }: { item: NewsDB }) => {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <Link
      href={`/news/${item._id}`}
      className={`w-full sm:w-[22rem] h-[30rem] transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div
        ref={cardRef}
        className="w-full h-full bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      >
        <div className="relative w-full h-[15rem]">
          <Image
            src={item.Image}
            alt={item.Title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="p-5 flex flex-col gap-3">
          <p className="text-sm text-blue-600 font-semibold">{item.Date}</p>
          <h3 className="text-base font-bold text-gray-800">
            {item.Title.replace(/#/g, "")}
          </h3>
          <span className="text-sm text-gray-600 font-medium">Read More</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
