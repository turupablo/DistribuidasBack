require('dotenv').config();
const Property = require('../models/property.model');

class PropertyService{
    async getProperties(){
        try {
            const properties = await Property.findAll({ raw: true });
            return properties;
        } catch (err) {
            console.log(err);
        }
    }

    async getProperty(id){
        try {
            const property = await Property.findByPk(id);
            return property;
        } catch (err) {
            console.log(err);
        }
    }

    async getPropertiesByOwner(ownerId){
        try {
            const properties = await Property.findAll({
                where: {
                    ownerId: ownerId
                }
            });
            return properties;
        } catch (err) {
            console.log(err);
        }
    }

    async createProperty(property){
        try {
            const newProperty = await Property.create(property);
            return newProperty;
        } catch (err) {
            console.log(err);
        }
    }

    async updateProperty(id, property){
        try {
            const propertyToUpdate = await Property.findByPk(id);
            await propertyToUpdate.update(property);
            return propertyToUpdate;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new PropertyService();