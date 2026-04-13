const nodemailer = require('nodemailer');
const { render } = require('@react-email/render');
const React = require('react');

const CustomerThanks = require('../emails/CustomerThanks').default || require('../emails/CustomerThanks');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendThankYouEmail(leadData) {
  try {
    console.log(`[Email Agent] Preparing to send Thank You email to: ${leadData.email}`);
    
    // Create the React element
    const emailElement = React.createElement(CustomerThanks, { name: leadData.name });
    const htmlOutput = await render(emailElement);

    const info = await transporter.sendMail({
      from: `"HydraFlows AI" <${process.env.FROM_EMAIL}>`,
      to: leadData.email,
      subject: `Thank you ${leadData.name} — HydraFlows AI will contact you soon`,
      html: htmlOutput,
    });

    console.log(`[Email Agent] Thank You email sent successfully: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[Email Agent] Error sending Thank You email:`, error);
    throw error;
  }
}

module.exports = { sendThankYouEmail };
