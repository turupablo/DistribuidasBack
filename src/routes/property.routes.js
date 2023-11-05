const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/property.controller');

// TODO: JWT Needed?

router.get('/', PropertyController.getProperties);
router.get('/:id', PropertyController.getProperty);
router.post('/',PropertyController.createProperty);

module.exports = router;