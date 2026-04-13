const { sendLeadNotification } = require('../agents/leadNotify');
const { sendThankYouEmail } = require('../agents/thankYou');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://hydra-flows-ai.vercel.app');
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
    const leadData = req.body;
    console.log('[Email Agent Endpoint] Received request to trigger emails for:', leadData.email);

    // Call both email agents concurrently using Promise.all
    await Promise.all([
      sendLeadNotification(leadData),
      sendThankYouEmail(leadData)
    ]);

    return res.status(200).json({ success: true, message: 'Emails dispatched successfully' });
  } catch (error) {
    console.error('[Email Agent Endpoint] Error dispatching emails:', error);
    return res.status(500).json({ success: false, error: 'Failed to process email dispatch' });
  }
};
