import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport(
  {
    host: process.env.ZOHO_SMTP_HOST,
    port: Number(process.env.ZOHO_SMTP_PORT),
    secure: true,
    pool: true,          // ✅ Reuse connections
    maxConnections: 5,
    maxMessages: 100,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  },
);

// // 🔍 Verify SMTP connection at startup
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
  try {
    const info = await transporter.sendMail({
      from: `"Xentrova" <${process.env.ZOHO_SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo,
      attachments,
    });
    return info;
  } catch (error) {
    throw error;
  }
}
