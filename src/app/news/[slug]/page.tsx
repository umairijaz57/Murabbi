// app/news/[slug]/page.tsx (SERVER COMPONENT - NO "use client")

import { newsData, NewsItem, toSlug } from "../constant/newsData";
import NewsDetailClient from "./NewsDetails";

// This runs at build time to generate static params
export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: toSlug(news.Title),
  }));
}

// Server component that passes resolved params to client
export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Resolve params on server side
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Find the news data on server side
  const currentNews: NewsItem | undefined = newsData.find(
    (item) => toSlug(item.Title) === slug
  );

  if (!currentNews) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">404 - News not found</h1>
      </div>
    );
  }

  // Pass the resolved data to client component
  return <NewsDetailClient currentNews={currentNews} />;
}