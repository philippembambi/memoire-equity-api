const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
    cat_name: {
        type: String,
        require : true
    },
    cat_desc: String
});

module.exports = mongoose.model('Category', categorySchema);
