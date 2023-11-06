const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/property.controller');

// TODO: JWT Needed?

router.get('/', PropertyController.getProperties);
router.get('/:id', PropertyController.getProperty);
router.get('/owner/:ownerId', PropertyController.getPropertiesByOwner);
router.post('/',PropertyController.createProperty);

module.exports = router;