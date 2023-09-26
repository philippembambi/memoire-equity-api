const express = require('express')
const router = express.Router()

const adminController = require('../mongoose/controller/adminController');

router.get('/login', adminController.login)
.post('/login', adminController.login);

router
  .get("/create", adminController.create)
  .post("/create", adminController.create);

module.exports = router;