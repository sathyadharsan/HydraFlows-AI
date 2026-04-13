const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 HydraFlows Backend is running successfully!');
});

// Import API handlers
const contactHandler = require('./api/contact/submit');
const emailHandler = require('./api/email-agent');

// Routes (mirroring Vercel auto-routing)
app.post('/api/contact/submit', contactHandler);
app.options('/api/contact/submit', contactHandler);
app.post('/api/email-agent', emailHandler);
app.options('/api/email-agent', emailHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 HydraFlows Backend running locally at http://localhost:${PORT}`);
  console.log(`- POST http://localhost:${PORT}/api/contact/submit`);
  console.log(`- POST http://localhost:${PORT}/api/email-agent`);
});
