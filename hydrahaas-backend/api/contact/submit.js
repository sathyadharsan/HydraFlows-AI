const db = require('../../db');
const nodemailer = require('nodemailer');

// ── Email Templates (Plain HTML) ────────────────────────────────

const getAdminEmailHtml = (lead) => `
<div style="background-color: #020617; color: #ffffff; font-family: sans-serif; margin: auto; padding: 20px;">
  <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 40px; max-width: 600px; margin: auto;">
    <h1 style="color: #10b981; font-size: 24px; margin: 0 0 20px 0;">🔥 New Lead: ${lead.name} — ${lead.industry} Sector</h1>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Name:</strong> ${lead.name}</div>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Email:</strong> ${lead.email}</div>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Phone:</strong> ${lead.phone}</div>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Company:</strong> ${lead.company}</div>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Industry:</strong> ${lead.industry}</div>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Scale:</strong> ${lead.scale}</div>
    <div style="margin: 8px 0; font-size: 16px;"><strong>Timeline:</strong> ${lead.timeline}</div>
    <div style="margin-top: 20px; padding: 16px; background-color: #1e293b; border-radius: 6px;">
      <div style="margin: 0; font-size: 16px;"><strong>Requirement:</strong></div>
      <div style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.5;">${lead.requirement}</div>
    </div>
  </div>
</div>
`;

const getCustomerThanksHtml = (name) => `
<div style="background-color: #020617; color: #ffffff; font-family: sans-serif; margin: auto; padding: 20px;">
  <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 40px; max-width: 600px; margin: auto; text-align: center;">
    <h1 style="color: #10b981; font-size: 24px; margin-top: 0;">Thank you ${name}!</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">
      We've received your request and our team at HydraFlows AI will be reviewing it shortly.
      We promise to get back to you within the next 24 hours.
    </p>
    <div style="margin-top: 32px; margin-bottom: 32px;">
      <p style="font-size: 14px; color: #94a3b8;">What happens next?</p>
      <p style="font-size: 16px; color: #cbd5e1;">One of our AI solutions architects will contact you to discuss your specific requirements and outline potential architectures for your business.</p>
    </div>
    <div style="border-top: 1px solid #1e293b; padding-top: 24px;">
      <p style="font-size: 14px; color: #94a3b8; margin: 4px 0;">HydraFlows AI Platform</p>
      <p style="font-size: 14px; color: #94a3b8; margin: 4px 0;">
        <a href="https://hydra-flows-ai.vercel.app" style="color: #10b981; text-decoration: none;">Visit our Website</a>
      </p>
    </div>
  </div>
</div>
`;

// ── Nodemailer Transporter ────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── Helpers ───────────────────────────────────────────────────

function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

async function sendEmails(leadData) {
  try {
    const adminMailOptions = {
      from: `"HydraFlows System" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔥 New Lead: ${leadData.name} — ${leadData.industry} Sector`,
      html: getAdminEmailHtml(leadData),
    };

    const customerMailOptions = {
      from: `"HydraFlows AI" <${process.env.FROM_EMAIL}>`,
      to: leadData.email,
      subject: `Thank you ${leadData.name} — HydraFlows AI will contact you soon`,
      html: getCustomerThanksHtml(leadData.name),
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);
    
    console.log(`[Contact API] Emails sent successfully for ${leadData.email}`);
  } catch (error) {
    console.error(`[Contact API] Email sending error:`, error.message);
  }
}

// ── Main Handler ──────────────────────────────────────────────

module.exports = async (req, res) => {
  // Step 1: Set CORS
  setCORS(res);

  // Step 2: Handle OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Step 3: Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const {
      name, email, phone, company,
      industry, scale, requirement, timeline
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, error: 'Name, email, phone are required' });
    }

    console.log(`[Contact API] New lead: ${name} | ${email}`);

    // Save to Supabase PostgreSQL
    const insertQuery = `
      INSERT INTO contact_leads 
        (name, email, phone, company, industry, scale, requirement, timeline)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id;
    `;
    const values = [name, email, phone, company, industry, scale, requirement, timeline];
    const dbRes = await db.query(insertQuery, values);
    const newLeadId = dbRes.rows[0].id;

    // Vercel Serverless immediately kills the function when res.status is called.
    // So we MUST await the email sending before returning the response.
    await sendEmails(req.body);

    return res.status(200).json({
      success: true,
      message: 'Lead saved successfully',
      id: newLeadId,
    });

  } catch (error) {
    console.error(`[Contact API] ERROR:`, error.message);
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error.message}`,
    });
  }
};
