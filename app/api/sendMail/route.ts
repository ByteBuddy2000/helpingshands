import { BRAND_CONTACT, ENQUIRY_TOPICS } from "@/data/aboutData"
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import z from "zod"

export const runtime = "nodejs"

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  topic: z.string().refine((topic) => ENQUIRY_TOPICS.includes(topic)),
  message: z.string().trim().min(10).max(3000),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  const parsed = enquirySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Please check your enquiry details." },
      { status: 400 }
    )
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM_NAME,
    SMTP_FROM_EMAIL,
    SMTP_RECEIPTIENT_EMAIL,
  } = process.env

  const port = Number(SMTP_PORT)
  if (
    !SMTP_HOST ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM_EMAIL ||
    !Number.isInteger(port) ||
    port <= 0
  ) {
    console.error("SMTP configuration is missing or invalid.")
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    )
  }

  const { name, email, phone, topic, message } = parsed.data
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: {
        name: SMTP_FROM_NAME || BRAND_CONTACT.shortName,
        address: SMTP_FROM_EMAIL,
      },
      to: SMTP_RECEIPTIENT_EMAIL,
      // to: "info@example.com",
      replyTo: email,
      subject: `Website enquiry: ${topic}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Enquiry topic: ${topic}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(
      "Failed to send enquiry email:",
      error instanceof Error ? error.message : "Unknown email delivery error."
    )
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry. Please try again.",
      },
      { status: 500 }
    )
  }
}
