const express = require('express')
const router = express.Router()
const userController = require('../mongoose/controller/userController');
const rootPath = require('../helpers/path')
const path = require('path');

router.route('/sign-in',).get((request, response) => {
    response.sendFile(path.join(rootPath, 'view', 'signin.html'))
})
.post(userController.connectUser);

router.route('/register').get((request, response) => {
    response.sendFile(path.join(rootPath, 'view', 'register.html'))
}).post(userController.createUser);

router.route('/all', userController.fetchUsers);

router.get('/', userController.fetchUsers);
router.get('/:id', userController.getUserById);

module.exports = router;