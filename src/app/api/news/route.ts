export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongodb";
import News from "../../../../models/news";



export async function GET(req: NextRequest, res: NextResponse) {
  await connectToMongoDB();

  const data = await News.find()
  return new NextResponse(
    JSON.stringify({
      data
    })
  );
  
}
