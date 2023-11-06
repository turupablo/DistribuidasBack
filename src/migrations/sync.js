
const { sequelize } = require('../db/config');

const Owner = require('../models/owner.model');
const Property = require('../models/property.model');

async function syncDatabase() {
    try {
        await sequelize.sync({ force: false });
        console.log('All models were synchronized successfully.');
    } catch (err) {
        console.log(err);
    }
}

syncDatabase();