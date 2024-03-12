const supplies = require('../models/SuppliesModel');
const suppliesController = require('../controllers/SuppliesController');

//Get all supplies
router.get('/', (suppliesController.getAllSupplies));

module.exports = router;