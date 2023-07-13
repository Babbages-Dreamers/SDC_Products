const pgp = require('pg-promise')();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'sdc_products',
  user: 'postgres',
  password: ''
};

const db = pgp(connection);

module.exports.db = db;
