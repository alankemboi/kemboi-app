import nodemailer from "nodemailer"

const { USER, PASS } = process.env

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export default async function sendEmail({
  to,
  subject,
  html,
}: EmailOptions): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com", // Specify your SMTP host
    // port: 465, // Specify your SMTP port
    // secure: true, // Set to true if your SMTP server requires a secure connection (e.g., TLS)
    auth: {
      user: USER, // Specify your SMTP username
      pass: PASS, // Specify your SMTP password
    },
  })

  const mailOptions = {
    from: `Alan Kemboi <${USER}>`, // Specify the sender email address
    to,
    subject,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.messageId)
    return true
  } catch (error) {
    console.error("Error sending email:", error)
    return false
  }
}
