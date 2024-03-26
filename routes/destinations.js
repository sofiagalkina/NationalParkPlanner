const destinationController = require('../controllers/DestinationController');
const router = require('express').Router();

//get all destinations
router.get('/', destinationController.getAllDestinations)

module.exports = router;