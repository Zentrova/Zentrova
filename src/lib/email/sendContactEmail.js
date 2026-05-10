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
  try {
    await sendEmail({
    to: "contact@xentrova.in",
    subject: `${fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase()} - ${subject}`,
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
  await sendEmail({
    to: email,
    subject: "Thanks for contacting Xentrova",
    html: contactAcknowledgementTemplate({fullName, subject }),
  });
    return { success: true };
  } catch (error) { 
    return { success: false, error: error.message};   
  }
}
