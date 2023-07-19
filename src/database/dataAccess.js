require('dotenv').config()
const pgp = require('pg-promise')();

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { sslmode: 'require', rejectUnauthorized: false },
  max: 15,
  idleTimeoutMillis: 3000,
  allowExitOnIdle: true
};

const db = pgp(connection)

db.connect()
.then(response => {
  console.log(response.client.serverVersion)
  response.done()
})
.catch((err) => console.log(err.message))

module.exports.db = db;
