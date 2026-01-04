export function contactNotificationTemplate(data) {
    return `
    <h3>New Contact Us Submission</h3>
  
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>

    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong><br/>${data.message}</p>
    `;
  }
  