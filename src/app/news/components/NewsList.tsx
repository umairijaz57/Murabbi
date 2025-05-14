import Link from "next/link";
import { newsData, toSlug } from "../constant/newsData";
import NewsCard from "./NewsCard";

type NewsListProps = {
  home?: boolean;
};

const NewsList = (props: NewsListProps) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-6 justify-center">
        {(props.home ? newsData.slice(0, 3) : newsData).map((item) => {
          const slug = toSlug(item.Title);
          return (
            <NewsCard
              key={slug}
              item={{ ...item, _id: slug, Link: `/news/${slug}` }}
            />
          );
        })}
      </div>

      {props.home && (
        <div className="flex justify-center items-center mt-12">
          <Link href="/resources">
            <button className="py-3 px-6 w-36 md:mt-4 rounded-lg transition-all text-sm font-bold  duration-500 border-2 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 border-blue-600">
              View More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewsList;
