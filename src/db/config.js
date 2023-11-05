const mysql = require('mysql2');
require('dotenv').config();

// Create the connection
const sqlDBconnection = async() => {
    try{
        await mysql.createConnection({
            host: process.env.SQL_HOST,
            user: process.env.SQL_NAME,
            password: process.env.SQL_PASS,
            port: process.env.SQL_PORT,
            database: process.env.SQL_DB
        });
    } catch (error) {  
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = { sqlDBconnection };
