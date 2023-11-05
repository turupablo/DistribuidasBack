// TODO: Delete this file
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ubuntu',
  password: 'ubuntu2520',
  database: 'myhome'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

module.exports = db;