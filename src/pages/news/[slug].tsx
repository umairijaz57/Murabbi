import { GetStaticPaths, GetStaticProps } from 'next';
import { newsData, NewsItem, toSlug } from "../../app/news/constant/newsData";
import NewsDetailClient from "../../app/news/[slug]/NewsDetails";

interface NewsDetailPageProps {
    currentNews: NewsItem;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = newsData.map((news) => ({
        params: { slug: toSlug(news.Title) },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<NewsDetailPageProps> = async ({ params }) => {
    const slug = params?.slug as string;

    const currentNews: NewsItem | undefined = newsData.find(
        (item) => toSlug(item.Title) === slug
    );

    if (!currentNews) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            currentNews,
        },
    };
};

export default function NewsDetailPage({ currentNews }: NewsDetailPageProps) {
    return <NewsDetailClient currentNews={currentNews} />;
} 