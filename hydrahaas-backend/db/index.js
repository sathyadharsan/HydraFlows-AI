const { Pool } = require('pg');

let pool;

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    pool.on('error', (err, client) => {
      console.error('Unexpected error on idle DB client', err);
    });
  }
  return pool;
}

module.exports = {
  query: (text, params) => getPool().query(text, params),
};
