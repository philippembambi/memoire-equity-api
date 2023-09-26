const mongoose = require('mongoose');
const Schema = mongoose.Schema

const stockSchema = new Schema({
    stock_StockId: {
        type: Schema.Types.ObjectId,
        ref: 'Stock'
    },
    stock_qty: {
        type: Number,
        require : true
    },
    stock_date: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Stock', stockSchema);
