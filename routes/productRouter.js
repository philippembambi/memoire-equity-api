const express = require('express')
const router = express.Router()

const productController = require('../mongoose/controller/productController');

router.get('/', productController.getProducts);
router.get('/get-products', productController.getProducts);
router.post('/add-product', productController.addProduct);

module.exports = router;