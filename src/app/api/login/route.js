import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  console.log("login api");
  const { email, password } = await request.json();

  try {
    // 1. Get user
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User not found");
    }

    // 2. Check password
    const passwordMatched = bcrypt.compareSync(password, user.password);
    if (!passwordMatched) {
      throw new Error("Password incorrect");
    }

    // 3. Generate token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    // 4. Create NextResponse with Cookie
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log("User:", user);
    console.log("Token:", token);

    return response;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: error.message,
      success: false,
    }, {
      status: 500,
    });
  }
}
