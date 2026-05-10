import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email/sendContactEmail";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject") || 'From project contact form';
    const message = formData.get("message");
    const file = formData.get("attachment");

    let attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    const { success, error } = await sendContactEmails({
      fullName,
      email,
      phone,
      subject,
      message,
      attachments,
    });
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: error || "Failed to send emails." },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
