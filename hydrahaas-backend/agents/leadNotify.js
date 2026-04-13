const nodemailer = require('nodemailer');
const { render } = require('@react-email/render');
const React = require('react');

// This usually resolves during Vercel's build via esbuild
const AdminLead = require('../emails/AdminLead').default || require('../emails/AdminLead');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465', 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendLeadNotification(leadData) {
  try {
    console.log(`[Email Agent] Preparing to send Admin notification for lead: ${leadData.email}`);
    
    // Create the React element
    const emailElement = React.createElement(AdminLead, { lead: leadData });
    const htmlOutput = await render(emailElement);

    const info = await transporter.sendMail({
      from: `"HydraFlows System" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // Using ADMIN_EMAIL instead of MANAGER_EMAIL per prompt
      subject: `🔥 New Lead: ${leadData.name} — ${leadData.industry} Sector`,
      html: htmlOutput,
    });

    console.log(`[Email Agent] Admin notification sent successfully: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[Email Agent] Error sending Admin notification:`, error);
    throw error;
  }
}

module.exports = { sendLeadNotification };
