const mongoose = require('mongoose');
const Schema = mongoose.Schema

const purchaseSchema = new Schema({
    purchase_clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        require : true
    },
    purchase_productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    purchase_qty: Number,
    purchase_amount: Number,
    purchase_date: String
});

module.exports = mongoose.model('Purchase', purchaseSchema);
