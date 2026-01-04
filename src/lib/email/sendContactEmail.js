import { sendEmail } from "./emailService";
import { contactAcknowledgementTemplate } from "./templates/contactAck";
import { contactNotificationTemplate } from "./templates/contactNotifi";

export async function sendContactEmails({
  fullName,
  email,
  phone,
  subject,
  message,
  attachments = [],
}) {
  // Internal mail
  await sendNotifi({
    to: "contact@xentrova.in",
    subject: `New Contact: ${subject}`,
    html: contactNotificationTemplate({
      fullName,
      email,
      phone,
      subject,
      message,
    }),
    replyTo: email,
    attachments,
  });

  // User acknowledgment
  await sendAck({
    to: email,
    subject: "Thanks for contacting Xentrova",
    html: contactAcknowledgementTemplate({ name: fullName, subject }),
  });
}
