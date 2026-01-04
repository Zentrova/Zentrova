import nodemailer from "nodemailer";

// 🔍 Log env availability (NOT values)
// console.log("[MAIL] SMTP CONFIG CHECK:", {
//   host: !!process.env.ZOHO_SMTP_HOST,
//   port: !!process.env.ZOHO_SMTP_PORT,
//   user: !!process.env.ZOHO_SMTP_USER,
//   pass: !!process.env.ZOHO_SMTP_PASS,
// });

const transporter = nodemailer.createTransport(
  {
    host: process.env.ZOHO_SMTP_HOST,
    port: Number(process.env.ZOHO_SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  },
  {
    logger: true, // 👈 nodemailer internal logs
    debug: true,  // 👈 SMTP traffic logs
  }
);

// 🔍 Verify SMTP connection at startup
// transporter.verify((error, success) => {
//   if (error) {
//     console.error("[MAIL] SMTP VERIFY FAILED ❌", error);
//   } else {
//     console.log("[MAIL] SMTP READY ✅");
//   }
// });

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  attachments = [],
}) {
  console.log("[MAIL] Sending email →", {
    to,
    subject,
    replyTo,
    attachmentsCount: attachments.length,
  });

  try {
    const info = await transporter.sendMail({
      from: `"Xentrova" <${process.env.ZOHO_SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo,
      attachments,
    });

    console.log("[MAIL] Email sent successfully ✅", {
      messageId: info.messageId,
      response: info.response,
    });

    return info;
  } catch (error) {
    throw error;
  }
}
