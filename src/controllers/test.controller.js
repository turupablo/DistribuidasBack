const { sequelize } = require('../db/config');

class TestController {
    async testServer(req, res) {
        try {
            return res.status(200).json({ message: 'El servidor esta UP!!' });
        } catch (err) {
            console.log(err);
        }
    }

    async migrateDB(req, res) {
        try {
            await sequelize.sync({ force: false });
            return res.status(200).json({ message: 'La base de datos fue migrada correctamente' });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new TestController();