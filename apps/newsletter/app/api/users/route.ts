import { NextResponse } from "next/server"

import { welcome_mail } from "@/lib/email"
import connect from "@/lib/mongo"
import sendEmail from "@/lib/sendMail"

async function sendOneEmail() {
  const db = await connect()
  const users = await db.collection("users").find({}).toArray()
  users.forEach(async (user) => {
    const emailSent = await sendEmail({
      to: user.email,
      subject: "Thank you for subscribing to our newsletter!🚀📚",
      html: welcome_mail,
    })
    if (emailSent) {
      console.log({
        user: `<${user.firstName} ${user.lastName} ${user.email} > `,
        message: "Email sent successfully\n",
      })
    } else {
      console.log({ error: "Failed to send email" })
      // res.status(500).json()
    }
  })
  console.log("Emails sent")
}

//SENT EMAILS
// sendOneEmail();
export async function GET() {
  const db = await connect()
  const users = await db.collection("users").find({}).toArray()

  //Format emails

  const maskedUsers = users.map((user) => {
    try {
      const [emailName, emailDomain] = user.email.split("@")
      const maskedEmailName = `${emailName.charAt(0)}${"*".repeat(
        emailName.length - 2
      )}${emailName.charAt(emailName.length - 1)}`
      const maskedEmail = `${maskedEmailName}@${emailDomain}`

      return { ...user, email: maskedEmail }
    } catch (err) {
      return { message: "Error formatting emails" }
    }
  })
  return NextResponse.json({ maskedUsers })
}

// POST request handler
export async function POST(request: Request) {
  const { firstName, lastName, email, notes } = await request.json()
  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  try {
    const db = await connect()

    const userExists = await db.collection("users").findOne({ email: email })
    //check if user exists and insert if not insert user
    if (validateEmail(email)) {
      const emailSent = await sendEmail({
        to: email,
        subject: "Thank you for subscribing to our newsletter!🚀📚",
        html: welcome_mail,
      })
      if (emailSent) {
        console.log({ message: "Email sent successfully" })
      } else {
        console.log({ error: "Failed to send email" })
        // res.status(500).json()
      }
    }
    if (userExists) {
      console.log("User already exists")
      return NextResponse.json({ message: "User already exists" })
    } else {
      await db
        .collection("users")
        .insertOne({
          firstName,
          lastName,
          email,
          createdAt: new Date(),
          notes: notes || null,
        })
      console.log("User added")
    }
  } catch (error) {
    console.error("Error checking user existence:", error)
    return NextResponse.json({ message: "Server error" })
  } finally {
    //close database connection
  }

  console.log(email, firstName, lastName)
  return NextResponse.json({ message: "/thank-you" })
}
