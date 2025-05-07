import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongodb";
import Course from "../../../../models/course";


export async function GET(req: NextRequest, res: NextResponse) {
  await connectToMongoDB();

  const data = await Course.find()
  
  return new NextResponse(
    JSON.stringify({
      data
    })
  );
  
}
