const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for most cloud providers unless you provide the CA cert
  },
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle DB client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
