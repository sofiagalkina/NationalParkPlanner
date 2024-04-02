const mongoose = require('mongoose');
const schema = mongoose.Schema;

const destinationsSchema = new schema({
    name: { type: String, required: true },
    location: { 
        state: { type: String, required: true },
        coordinates: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        }
    },
    description: { type: String, required: true },
    establishedDate: { type: Date, required: true },
    area: { type: String, required: true }, // Assuming area is stored as a string like "3,423 sq mi"
    activities: [{ type: String }], // Array of activities available at the park
    imageUrl: { type: String, required: false } // Optional field for an image URL of the park
},
{
    versionKey: false,
    collection: 'Destination'
});

module.exports = mongoose.model('Destination', destinationsSchema);
