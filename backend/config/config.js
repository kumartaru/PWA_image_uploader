const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'comodity_digital_qc',
  port: '3306'
});


module.exports={
    connection
}