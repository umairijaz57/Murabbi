import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongodb";
import Register from "../../../../models/register";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectToMongoDB();
    const body = await req.json();

    const {
      FullName,
      Course,
      Email,
      Gender,
      ContactNumber,
      Organization,
      CNIC,
      Designation,
    } = body;

    console.log(body);

    // If the user doesn't exist, create a new one
    const newUser = new Register({
      FullName,
      Course,
      Email,
      Gender,
      ContactNumber,
      Organization,
      CNIC,
      Designation,
    });

    await newUser.save();
    console.log(".....");

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
