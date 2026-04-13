const db = require('../db');
const { sendLeadNotification } = require('../agents/leadNotify');
const { sendThankYouEmail } = require('../agents/thankYou');

module.exports = async (req, res) => {
  // CORS setup
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, company, industry, scale, requirement, timeline } = req.body;

    console.log(`[Contact API] Processing new lead: ${email} from ${company}`);

    // Insert into PostgreSQL database
    const insertQuery = `
      INSERT INTO contact_leads (name, email, phone, company, industry, scale, requirement, timeline)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, created_at;
    `;
    const values = [name, email, phone, company, industry, scale, requirement, timeline];

    const dbRes = await db.query(insertQuery, values);
    const newLeadId = dbRes.rows[0].id;
    console.log(`[Contact API] Lead saved to database with ID: ${newLeadId}`);

    // Trigger email agent after save
    // We await to ensure emails are sent before the Vercel function terminates
    try {
      await Promise.all([
        sendLeadNotification(req.body),
        sendThankYouEmail(req.body)
      ]);
      console.log(`[Contact API] Email agents triggered successfully`);
    } catch (emailError) {
      console.error(`[Contact API] Error from email agents:`, emailError);
      // Do not block the success response to user if email fails
    }

    return res.status(200).json({ success: true, message: 'Lead saved' });

  } catch (error) {
    console.error(`[Contact API] CRITICAL ERROR:`, error.message);
    if (error.code) console.error(`[Contact API] Error Code:`, error.code);
    return res.status(500).json({ success: false, error: `Database Error: ${error.message}` });
  }
};
