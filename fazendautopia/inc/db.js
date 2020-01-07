const mysql = require('mysql2');

//fonte https://www.npmjs.com/package/mysql2
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fazendautopia',
  password: 'admin'
});

module.exports = connection;

