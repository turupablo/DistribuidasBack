require("dotenv").config();
const bcrypt = require("bcrypt");
const Owner = require("../models/owner.model");

class AuthService {
    async ownerHasValidCredentials(email, password) {
        try {
            const owner = await Owner.findOne({
                where: {
                    email: email,
                },
            });
            if (owner && await bcrypt.compare(password, owner.password)) {
                return true;
            }
            return false;
        } catch (err) {
            console.log(err);
            throw new Error("Error al obtener el usuario con el mail");
        }
    }
}

module.exports = new AuthService();