require('dotenv').config();
const OwnerService = require('../services/owner.service');
const AuthService = require('../services/auth.service');
const jwt = require('jsonwebtoken');

class OwnerController{
    async getOwners(req, res){
        try {
            const owners = await OwnerService.getOwners();
            return res.status(200).json(owners);
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                method: "getOwners",
                message: err.message,
            });
        }
    }

    async getOwner(req, res){
        try {
            const id = req.params.id;
            const owner = await OwnerService.findByPk(id);
            if (!owner) {
                return res.status(404).json({
                    method: "getOwner",
                    message: `No existe un propietario con id ${id}`,
                    data: null,
                });
            }
            return res.status(200).json(owner);
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                method: "getOwner",
                message: err.message,
            });
        }
    }

    async createOwner(req, res){
        try {
            const owner = req.body;
            let isOwnerRegistered = await OwnerService.getOwnerByEmail(owner.email);
            if (isOwnerRegistered) {
                return res.status(400).json({
                    method: "createOwner",
                    message: "El email ya esta registrado",
                    data: null,
                });
            }
            const newOwner = await OwnerService.create(owner);
            return res.status(200).json(newOwner);
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                method: "createOwner",
                message: err.message,
            });
        }
    }

    async loginOwner(req, res){
        try {
            const { email, password } = req.body;
            let isOwnerRegistered = await AuthService.ownerHasValidCredentials(email, password);
            if (isOwnerRegistered) {
                const user = await OwnerService.getOwnerByEmail(email);
                const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
                    expiresIn: process.env.EXPIRES_IN,
                });
                return res.status(200).json({ token });
            } else {
                return res.status(401).json({
                    method: "loginOwner",
                    message: "No autorizado",
                    data: null,
                });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                method: "loginOwner",
                message: err.message,
            });
        }
    }
}

module.exports = new OwnerController();