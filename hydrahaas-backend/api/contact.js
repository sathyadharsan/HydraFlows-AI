const db = require('../db');
const { sendLeadNotification } = require('../agents/leadNotify');
const { sendThankYouEmail } = require('../agents/thankYou');

// ── CORS helper ──────────────────────────────────────────────
function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

module.exports = async (req, res) => {

  // Step 1: Set CORS on EVERY response
  setCORS(res);

  // Step 2: Handle preflight OPTIONS — MUST return 200 immediately
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

    console.log(`[Contact API] New lead: ${name} | ${email} | ${industry}`);

    // Save to Supabase PostgreSQL
    const insertQuery = `
      INSERT INTO contact_leads 
        (name, email, phone, company, industry, scale, requirement, timeline)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, created_at;
    `;
    const values = [name, email, phone, company, industry, scale, requirement, timeline];
    const dbRes = await db.query(insertQuery, values);
    const newLeadId = dbRes.rows[0].id;
    console.log(`[Contact API] Saved to DB — Lead ID: ${newLeadId}`);

    // Send emails (don't block response if email fails)
    Promise.all([
      sendLeadNotification(req.body),
      sendThankYouEmail(req.body),
    ]).then(() => {
      console.log(`[Contact API] Emails sent for lead: ${newLeadId}`);
    }).catch((err) => {
      console.error(`[Contact API] Email error (non-blocking):`, err.message);
    });

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
