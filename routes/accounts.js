const accountsController = require('../controllers/AccountsController');
const router = require('express').Router();

//Get all accounts
router.get('/', accountsController.getAllAccounts);

module.exports = router;