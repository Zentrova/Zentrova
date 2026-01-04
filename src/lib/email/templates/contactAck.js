export function contactAcknowledgementTemplate({
    name,
    subject,
  }) {
    return `
      <p>Hi ${name},</p>
  
      <p>
        Thank you for contacting <strong>Xentrova</strong>.
        We’ve received your message regarding <strong>${subject}</strong>.
      </p>
  
      <p>
        Our team will review your request and respond shortly.
      </p>
  
      <p>
        Regards,<br/>
        <strong>Xentrova Team</strong><br/>
        <a href="https://xentrova.in">xentrova.in</a>
      </p>
    `;
  }
  