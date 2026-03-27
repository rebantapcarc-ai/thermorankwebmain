import { Resend } from 'resend';
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

const resend = new Resend(process.env.RESEND_API_KEY);

// Create a new ratelimiter, that allows 3 requests per 24 hours per IP
// (Adjust these counts as needed for your specific use case)
let ratelimit = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
    ratelimit = new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(3, '24 h'),
    })
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Rate limiting check
    if (ratelimit) {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const { success, limit, reset, remaining } = await ratelimit.limit(`ratelimit_${ip}`);
        
        if (!success) {
            console.warn(`Rate limit exceeded for IP: ${ip}`);
            return res.status(429).json({ 
                success: false, 
                error: "Too many requests. Please try again after 24 hours.",
                limit, 
                remaining, 
                reset 
            });
        }
    }

    const { name, email, message, company, phone, state, techs } = req.body;

    // Use a placeholder email or environment variable for the recipient.
    // The onboarding@resend.dev address works for testing on the default Resend free tier.
    const recipient = process.env.CONTACT_EMAIL || 'delivered@resend.dev';
    console.log(`Attempting to send email to: ${recipient}`);

    try {
      const response = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', 
        to: recipient,
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

      if (response.error) {
        console.error('Resend API Error:', response.error);
        return res.status(400).json({ success: false, error: response.error });
      }

      console.log('Email sent successfully:', response.data);
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error('Execution Error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
