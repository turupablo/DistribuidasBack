require('dotenv').config();
const Owner = require('../models/owner.model');
const bcrypt = require('bcrypt');

class OwnerService{
    async getOwners(){
        try {
            const owners = await Owner.findAll();
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

    async createOwner(owner){
        try {
            let isOwnerRegistered = await Owner.findOne({
                where: {
                    email: owner.email
                }
            });
            if(isOwnerRegistered){
                throw new Error('El email ya esta registrado');
            }
            else{
                let newOwner = new Owner(owner);
                newOwner.password = await bcrypt.hashSync(owner.password, parseInt(process.env.SALT_ROUNDS) | 10);
                const owner = await Owner.create(newOwner);
                return owner;
            }
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