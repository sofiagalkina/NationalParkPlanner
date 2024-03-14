const suppliesController = require('../controllers/SuppliesController');
const router = require('express').Router();

//Get all supplies
router.get('/', (suppliesController.getAllSupplies));

module.exports = router;