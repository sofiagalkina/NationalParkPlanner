const destinations = require('../models/DestinationsModel');

//Get all destination data
const getAllDestinations = async (req, res) => {
    try {
        console.log("Getting all destination information");
        const destinationsList = await destinations.find();
        console.log(destinationsList);
        res.json(destinationsList);
    }
    catch (err) {
        console.log(err)
        res.json({message: err});
    }
};

module.exports = {
    getAllDestinations
};