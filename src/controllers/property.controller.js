require('dotenv').config();
const PropertyService = require('../services/property.service');

class PropertyController {
    async getProperties(req, res) {
        try {
            const properties = await PropertyService.getProperties();
            return res.status(200).json(properties);
        } catch (err) {
            console.log(err);
        }
    }

    async getProperty(req, res) {
        try {
            const id = req.params.id;
            const property = await PropertyService.getProperty(id);
            return res.status(200).json(property);
        } catch (err) {
            console.log(err);
        }
    }

    async createProperty(req, res) {
        try {
            const property = req.body;
            const newProperty = await PropertyService.createProperty(property);
            return res.status(200).json(newProperty);
        } catch (err) {
            console.log(err);
        }
    }

    async getPropertiesByOwner(req, res) {
        try {
            const ownerId = req.params.ownerId;
            const properties = await PropertyService.getPropertiesByOwner(ownerId);
            return res.status(200).json(properties);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new PropertyController();