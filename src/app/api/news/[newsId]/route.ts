import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../../lib/mongodb";
import Course from "../../../../../models/course";
import News from "../../../../../models/news";

export async function GET(
  req: NextRequest,
  { params }: { params: { newsId: string } },
  res: NextResponse
) {
  await connectToMongoDB();
  try {
    const news = await News.findById(params.newsId);

    if (!news) {
      return new NextResponse(JSON.stringify({ error: "News not found" }));
    }

    return new NextResponse(JSON.stringify({ data: news }));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal server error" }));
  }
}
