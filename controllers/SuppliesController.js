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

//Get supplies by specific id
const getSuppliesById = async (req, res) => {
    try {
        console.log("Getting supplies by id");
        const suppliesList = await supplies.findById(req.params.id);
        console.log(suppliesList);
        res.json(suppliesList);
    }
    catch (err) {
        console.log(err);
        res.json({message: err});
    }
};

module.exports = {
    getAllSupplies,
    getSuppliesById
};