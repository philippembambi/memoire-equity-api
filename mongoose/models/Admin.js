const mongoose = require('mongoose');
const Schema = mongoose.Schema

const adminSchema = new Schema({
    admin_name: {
        type: String,
        require : true
    },
    admin_psw: {
        type: String,
        require : true
    }
});

module.exports = mongoose.model('Admin', adminSchema);
