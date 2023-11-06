const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.SQL_DB,
    process.env.SQL_NAME, 
    process.env.SQL_PASS, {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: 'mysql',
});

const sqlDBconnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }

    return sequelize;
};

module.exports = { sqlDBconnection, sequelize };