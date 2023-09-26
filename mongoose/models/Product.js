const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    prod_label: {
        type: String,
        require : true
    },
    prod_price: {
        type: Number,
        require : true
    },
    prod_categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    prod_category: String,
    prod_details: {
        type: String
    },
    prod_qte: Number,
    prod_image1: String,
    prod_image2: String,
    prod_date: {
        type: String,
        default: new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear().toString()
    }
});

module.exports = mongoose.model('Product', productSchema);
