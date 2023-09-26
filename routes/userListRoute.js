'use strict';

const { response } = require('express');

module.exports = function(app) {
    var userList = require('../mongoose/controller/userListController');

    app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);

    app.route('users/:userId')
        .get(userList.read_a_user);

    app.get("/", (req, res) => {
  
            let data = {
                name: "GFG",
                age: 18,
                male: true
            }
          
            res.send(data);
        
        });

    app.get("/test", (request, response) => {
            response.send("Hello Node.js !");
    });
};