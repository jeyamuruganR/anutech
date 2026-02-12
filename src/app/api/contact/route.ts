import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    console.log("Incoming:", name, email);

    // Check env vars
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASS in env");
      return NextResponse.json(
        { success: false, error: "Email config missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // <-- App Password here
      },
    });
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS ? "PASS OK" : "PASS MISSING");

    // Optional: verify connection
    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // you receive the mail
      replyTo: email, // user email for reply
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully!");

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("❌ Email error:", error);

    return NextResponse.json(
      { success: false, error: error?.message || "Email failed" },
      { status: 500 }
    );
  }
}
