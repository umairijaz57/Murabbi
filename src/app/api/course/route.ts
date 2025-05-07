import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Course from "../../../../models/course";
import { parse } from "url"; // Import the 'parse' function from 'url'
import { connectToMongoDB } from "../../../../lib/mongodb";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectToMongoDB();
    const body = await req.json();

    if (req.method !== "POST") {
      return new NextResponse(JSON.stringify({ error: "Method not allowed" }));
    }

    if (!req.body) {
      return new NextResponse(JSON.stringify({ error: "Data is missing" }));
    }

    const { Title, Ratings,Image, Reviews, Link, Category, Name, Description } = body;
    console.log(body);

    // if (!email || !password) {
    //   return new NextResponse(
    //     JSON.stringify({ error: "Invalid request body" })
    //   );
    // }

    // const user = await User.findOne({ email }).select("+password");

    // if (!user) {
    //   return new NextResponse(JSON.stringify({ error: "User not found" }));
    // }

    // const passwordMatch = await compare(password, user.password);

    // if (!passwordMatch) {
    //   return new NextResponse(JSON.stringify({ error: "Invalid password" }));
    // }

    const newUser = {
      Title,
      Ratings,
      Image,
      Reviews,
      Link,
      Category,
      Name,
      Description,
    };

    const createdUser = await Course.create(newUser);

    return new NextResponse(
      JSON.stringify({
        success: true,
      })
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal server error" }));
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  await connectToMongoDB();

  const data = await Course.find()
  
  return new NextResponse(
    JSON.stringify({
      data
    })
  );
  
}
