const mongoose = require('mongoose');
const schema = mongoose.Schema;

const accountsSchema = new schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    plannedTripID: {type: Number, required: true},



},
{
    versionKey: false,
    collection: 'UserAccounts'
});

module.exports = mongoose.model('accounts', accountsSchema);