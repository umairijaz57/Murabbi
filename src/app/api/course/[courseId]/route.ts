import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { parse } from "url"; // Import the 'parse' function from 'url'
import { connectToMongoDB } from "../../../../../lib/mongodb";
import Course from "../../../../../models/course";

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string } },
  res: NextResponse
) {
  await connectToMongoDB();
  try {
    const course = await Course.findById(params.courseId);

    if (!course) {
      return new NextResponse(JSON.stringify({ error: "Course not found" }));
    }

    return new NextResponse(JSON.stringify({ data: course }));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal server error" }));
  }
}
