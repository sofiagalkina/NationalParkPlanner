const supplies = require('../models/SuppliesModel');

//Get all supplies
const getAllSupplies = async (req, res) => {
    try {
        const supplies = await supplies.find();
        res.json(supplies);
    }
    catch (err) {
        res.json({message: err});
    }
};

module.exports = {
    getAllSupplies
};