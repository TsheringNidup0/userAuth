const pgp = require('pg-promise')();
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

module.exports = db;
