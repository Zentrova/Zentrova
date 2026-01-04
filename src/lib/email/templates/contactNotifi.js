export function contactNotificationTemplate({
  fullName,
  email,
  phone,
  subject,
  message,
  attachmentName,
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Contact Form Submission</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:24px 24px 12px 24px; text-align:center;">
              <img src="https://www.xentrova.in/xentrova.png" alt="Xentrova" height="36" style="display:block; margin:auto;" />
              <h2 style="margin:12px 0 0 0; color:#16a34a;">New Contact Form Submission</h2>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding:24px; color:#374151; font-size:15px; line-height:1.6;">
              <p><strong>Full Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#16a34a; text-decoration:none;">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="color:#16a34a; text-decoration:none;">${phone}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong><br />${message}</p>
              ${
                attachmentName
                  ? `<p><strong>Attachment:</strong> ${attachmentName}</p>`
                  : ""
              }
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding:24px; border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 6px 0; font-size:14px; color:#111827;">Regards,</p>
              <p style="margin:0; font-size:15px; color:#111827; font-weight:bold;">Team Xentrova</p>
              <p style="margin:4px 0 12px 0; font-size:13px; color:#6b7280;">
                Web Design • Development • UI/UX • Shopify • Mobile Apps
              </p>
              <p style="margin:0 0 8px 0; font-size:13px;">
                 <a href="https://www.xentrova.in" style="color:#16a34a; text-decoration:none;">www.xentrova.in</a><br />
                 <a href="mailto:contact@xentrova.in" style="color:#16a34a; text-decoration:none;">contact@xentrova.in</a><br />
                 <a href="tel:+919876543210" style="color:#16a34a; text-decoration:none;">+91 98765 43210</a>
              </p>

              <!-- Social Icons -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:8px;">
                    <a href="https://www.linkedin.com/company/xentrova">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="20" alt="LinkedIn" />
                    </a>
                  </td>
                  <td style="padding-right:8px;">
                    <a href="https://www.instagram.com/xentrova">
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="20" alt="Instagram" />
                    </a>
                  </td>
                  <td style="padding-right:8px;">
                    <a href="https://www.facebook.com/xentrova">
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="20" alt="Facebook" />
                    </a>
                  </td>
                  <td>
                    <a href="https://twitter.com/xentrova">
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="20" alt="Twitter" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Disclaimer -->
          <tr>
            <td style="padding:16px 24px; background:#f9fafb; font-size:11px; color:#6b7280; line-height:1.5;">
              <strong>Disclaimer:</strong><br />
              This email contains confidential information intended for Xentrova internal use only. 
              If received in error, please delete and notify the sender.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
