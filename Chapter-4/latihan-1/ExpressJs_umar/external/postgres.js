require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, PORT } = process.env;

const { Client } = require('pg');
const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});
client.connect();

module.exports = client;