const express = require('express')
const router = express.Router()

const categoryController = require('../mongoose/controller/categoryController');

router.get('/', categoryController.getCategories);
router.get('/get-categories', categoryController.getCategories);
router.get('/populate-categories', categoryController.fillDefaultCategories);

module.exports = router;