require('dotenv').config();
const Owner = require('../models/owner.model');
const bcrypt = require('bcrypt');

class OwnerService{
    async getOwners(){
        try {
            console.log('getOwners');
            const owners = await Owner.findAll({ raw: true });
            console.log(owners);
            return owners;
        } catch (err) {
            console.log(err);
        }
    }

    async getOwner(id){
        try {
            const owner = await Owner.findByPk(id);
            return owner;
        } catch (err) {
            console.log(err);
        }
    }

    async create(_owner){
        try {
            let newOwner = new Owner(_owner);
            newOwner.password = await bcrypt.hashSync(_owner.password, parseInt(process.env.SALT_ROUNDS) | 10);
            const ownerAdded = await Owner.create({
                nombre: newOwner.nombre,
                apellido: newOwner.apellido,
                email: newOwner.email,
                telefono: newOwner.telefono,
                password: newOwner.password,
            });
            return ownerAdded;
        } catch (err) {
            console.log(err);
        }
    }

    async getOwnerByEmail(email){
        try {
            const owner = await Owner.findOne({
                where: {
                    email: email
                }
            });
            return owner;
        } catch (err) {
            console.log(err);
            throw new Error('Error al obtener el usuario con el mail');
        }
    }

}

module.exports = new OwnerService();