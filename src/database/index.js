const { Client } = require('pg');

const client = new Client({
  host: process.env.DATABASE_URL,
  port: process.env.DATABASE_PORT,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
