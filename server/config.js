const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  database: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: 'localhost'
  }
}