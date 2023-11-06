const express = require('express');
const router = express.Router();
const OwnerController = require('../controllers/owner.controller');

router.get('/', OwnerController.getOwners);
router.get('/:id', OwnerController.getOwner);
router.post('/', OwnerController.createOwner);
router.post('/login', OwnerController.loginOwner);

module.exports = router;