import { connectToDB } from "@/lib/connectToDB"
import { User } from "@/models/User"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import z from "zod"

const registerUserSchema = z.object({
  action: z.literal("register-user"),
  user: z.object({
    fullname: z.string().trim().min(1),
    username: z.string().trim().min(3),
    email: z.string().trim().email(),
    password: z.string().min(1),
  }),
})

export async function POST(request: Request) {
  try {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      )
    }

    const parsedBody = registerUserSchema.safeParse(body)
    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, message: "Invalid registration details." },
        { status: 400 }
      )
    }

    const { fullname, username, email, password } = parsedBody.data.user
    const normalizedEmail = email.toLowerCase()
    const normalizedUsername = username.toLowerCase()

    await connectToDB()

    const existingEmail = await User.findOne({ email: normalizedEmail })

    if (existingEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "An account with this email already exists.",
        },
        { status: 409 }
      )
    }

    const existingUsername = await User.findOne({
      username: normalizedUsername,
    })

    if (existingUsername) {
      return NextResponse.json(
        {
          success: false,
          message: "An account with this username already exists.",
        },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const user = await User.create({
      fullname,
      username: normalizedUsername,
      email: normalizedEmail,
      passwordHash,
      role: "user",
      status: "ACTIVE",
    })

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully!",
        user: {
          id: user._id.toString(),
          fullname: user.fullname,
          username: user.username,
          email: user.email,
          role: user.role,
          status: user.status,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Register user error:", error)

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === 11000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "An account already uses this email or username.",
        },
        { status: 409 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Registration failed. Please try again.",
      },
      { status: 500 }
    )
  }
}
