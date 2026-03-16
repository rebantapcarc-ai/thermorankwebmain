import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, company, phone, state, techs } = req.body;

    // Use a placeholder email or environment variable for the recipient.
    // The onboarding@resend.dev address works for testing on the default Resend free tier.
    try {
      const data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', 
        to: process.env.CONTACT_EMAIL || 'delivered@resend.dev', // Replace with your actual email
        subject: `New Lead: ${name} from ${company || 'Website'}`,
        html: `
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>State:</strong> ${state || 'N/A'}</p>
          <p><strong>Techs:</strong> ${techs || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
