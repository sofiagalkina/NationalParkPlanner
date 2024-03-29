const mongoose = require('mongoose');
const schema = mongoose.Schema;

const suppliesSchema = new schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    date: {type: Date, default: Date.now}
},
{
    versionKey: false,
    collection: 'Supplies'
});

module.exports = mongoose.model('supplies', suppliesSchema);