const supplies = require('../models/SuppliesModel');

//Get all supplies
const getAllSupplies = async (req, res) => {
    try {
        console.log("Getting all supplies");
        const suppliesList = await supplies.find();
        console.log(suppliesList);
        res.json(suppliesList);
    }
    catch (err) {
        console.log(err);
        res.json({message: err});
    }
};

module.exports = {
    getAllSupplies
};