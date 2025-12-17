import pg from 'pg';
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

const { Pool } = pg; // pool connection to the database

// Create the connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Listener for errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Export the query function for other files to use
export const query = (text, params) => pool.query(text, params);