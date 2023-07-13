const pgp = require('pg-promise')();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'sdc_products',
  user: 'postgres',
  password: '',
  allowExitOnIdle: true
};

const db = pgp(connection);

module.exports.db = db;
