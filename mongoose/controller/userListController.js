'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('Users');

exports.all_users = function(res){

            res.send("Just some text");
            //res.json(user);
}

exports.list_all_users = function(req, res){
    User.find({}, function(err, user){
        if(err){
            res.send(err);
            res.json(user);
        }
    });
}

exports.create_a_user = function(req, res){
    var new_user = new User(req.body);
    new_user.save(function(err, user){
        if(err){
            res.send(err);
            res.json(user);
        }
    });
}

exports.read_a_user = function(req, res){
    User.findById(req.param.userId, function(err, user){
        if(err){
            res.send(err);
            res.json(user);
        }
    });
}