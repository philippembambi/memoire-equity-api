const mongoose = require('mongoose');
const Schema = mongoose.Schema

const clientSchema = new Schema({
    client_firstname: {
        type: String,
        require : true
    },
    client_lastname: {
        type: String,
    },
    client_phone: {
        type: String
    },
    client_email: String
});

module.exports = mongoose.model('Client', clientSchema);
