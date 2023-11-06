const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Property = sequelize.define('Property', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ownerId: DataTypes.INTEGER, // TODO: Lista de owner
    tipoOperacion: DataTypes.STRING,
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT,
    direccion: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    piso: DataTypes.INTEGER,
    localidad: DataTypes.STRING,
    barrio: DataTypes.STRING,
    provincia: DataTypes.STRING,
    pais: DataTypes.STRING,
    antiguedad: DataTypes.INTEGER,
    tipoDePropiedad: DataTypes.STRING, // Todo: tabla aparte
    superficieCubierta: DataTypes.INTEGER,
    superficieSemicubierta: DataTypes.INTEGER,
    superficieDescubierta: DataTypes.INTEGER,
    cantidadAmbientes: DataTypes.INTEGER,
    cantidadDormitorios: DataTypes.INTEGER,
    cantidadBanios: DataTypes.INTEGER,
    cantidadCocheras: DataTypes.INTEGER,
    fotos: DataTypes.INTEGER, // TODO: Ver como guardar las fotos, tabla aparte 
    comodidades: DataTypes.STRING, // TODO: Lista unica de comodidades
    orientacion: DataTypes.STRING,
    sentido: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    moneda: DataTypes.STRING,
    expensas: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
});

module.exports = Property;