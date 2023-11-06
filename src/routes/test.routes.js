const express = require('express');
const testController = require('../controllers/test.controller');
const router = express.Router();

router.get('/server', testController.testServer);
router.get('/migrate', testController.migrateDB);

module.exports = router;