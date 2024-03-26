const accounts = require('../models/AccountsModel');

//Get all accounts
const getAllAccounts = async (req, res) => {
    try {
        console.log("Getting all user account information");
        const accountsList = await accounts.find();
        console.log(accountsList);
        res.json(accountsList);
    }
    catch (err) {
        console.log(err);
        res.json({message: err});
    }
};

module.exports = {
    getAllAccounts
};