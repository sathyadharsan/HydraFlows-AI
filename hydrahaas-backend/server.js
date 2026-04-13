const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('🚀 HydraFlows Backend is running successfully!');
});

// Import your API handlers
const contactHandler = require('./api/contact');
const emailHandler = require('./api/email-agent');

// Mock Vercel environment (res.status().json() etc is already standard in Express)
app.post('/api/contact/submit', contactHandler);
app.post('/api/contact', contactHandler);
app.post('/api/email-agent', emailHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 HydraFlows Backend running locally at http://localhost:${PORT}`);
  console.log(`- POST http://localhost:${PORT}/api/contact/submit`);
  console.log(`- POST http://localhost:${PORT}/api/email-agent`);
});
