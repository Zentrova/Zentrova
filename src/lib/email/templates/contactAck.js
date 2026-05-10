export function contactAcknowledgementTemplate({
  fullName,
  subject,
}) {
  return `
    <!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for contacting Xentrova</title>
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
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:24px;">
          <h2 style="margin:0 0 12px 0; color:#111827;">
            Thank you for reaching out,
              <span style="color:#16a34a; font-weight:600;">
    ${fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase()}
  </span>.
 
          </h2>

          <p style="margin:0 0 16px 0; color:#374151; font-size:15px; line-height:1.6;">
            We’ve successfully received your message. Our team at <strong>Xentrova</strong> truly appreciates you taking the time to contact us.
          </p>

          <p style="margin:0 0 16px 0; color:#374151; font-size:15px; line-height:1.6;">
            Our experts will review your request and get back to you within <strong>24 hours</strong>.
          </p>

          <p style="margin:0; color:#374151; font-size:15px;">
            Need immediate help? You can also reach us directly via phone or email mentioned below.
          </p>
        </td>
      </tr>

      <!-- Signature -->
      <tr>
        <td style="padding:24px; border-top:1px solid #e5e7eb;">
          <p style="margin:0 0 6px 0; font-size:14px; color:#111827;">
            Warm regards,
          </p>
          <p style="margin:0; font-size:15px; color:#111827; font-weight:bold;">
            Team <span style="color:#16a34a;">Xentrova
  </span>.
          </p>
          <p style="margin:4px 0 12px 0; font-size:13px; color:#6b7280;">
            Web Design • Development • UI/UX • Shopify • Mobile Apps
          </p>

          <table cellpadding="0" cellspacing="0" style="font-size:13px; color:#111827;">
  <tr>
    <td width="20" valign="middle">
      <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="14" alt="Email" />
    </td>
    <td style="padding-left:6px;">
      contact@xentrova.in
    </td>
  </tr>

  <tr>
    <td width="20" valign="middle" style="padding-top:6px;">
      <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" width="14" alt="Phone" />
    </td>
    <td style="padding-left:6px; padding-top:6px;">
      +91 98765 43210
    </td>
  </tr>

  <tr>
    <td width="20" valign="middle" style="padding-top:6px;">
      <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" width="14" alt="Website" />
    </td>
    <td style="padding-left:6px; padding-top:6px;">
      <a href="https://www.xentrova.in" style="color:#16a34a; text-decoration:none;">
        www.xentrova.in
      </a>
    </td>
  </tr>
</table>


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

      <tr>
        <td style="padding:16px 24px; background:#f9fafb; font-size:11px; color:#6b7280; line-height:1.5;">
          <strong>Disclaimer:</strong><br />
          This email and any attachments are confidential and intended solely for the use of the individual or entity to whom they are addressed. 
          If you have received this email in error, please notify the sender and delete it immediately. 
          Xentrova is not responsible for any loss or damage arising from the use of this email.
        </td>
      </tr>

    </table>
    <!-- End Card -->

  </td>
</tr>
  </table>

</body>
</html>

    `;
}
