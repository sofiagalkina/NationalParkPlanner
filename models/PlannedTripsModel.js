const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plannedTripsSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'accounts',
        required: true
    },
    destinations: [{
        type: Schema.Types.ObjectId,
        ref: 'Destination',
        required: true
    }],
    suppliesNeeded: [{
        supply: {
            type: Schema.Types.ObjectId,
            ref: 'supplies',
            required: true
        },
        quantity: { 
            type: Number, 
            required: true 
        }
    }],
    tripDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1
    },
    notes: {
        type: String,
        required: false
    }
},
{
    versionKey: false,
    collection: 'PlannedTrips'
});

module.exports = mongoose.model('PlannedTrips', plannedTripsSchema);