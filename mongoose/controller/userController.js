const User = require('../models/userModel')

exports.fetchUsers = async (req, res, next) => {

    //User.insertMany({name: "Philippe", email: "philippembambi413@gmail.com", password: "Costa", sexe: "M"});
    //User.insertMany({name: "Ben", email: "ben34@gmail.com", password: "123", sexe: "M"});

    await User.find().then(users => {
        res.send(users)
        console.log('====================================');
        console.log(users);
        console.log('====================================');
    }).catch(err => {
        console.log(err);
    })    
}

exports.createUser = (req, res) => {
    /*
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const sexe = req.body.sexe
    const email = req.body.email
    const password   = req.body.password
    */
    const user = new User();
    user.createTable({firstname: firstname, lastname: lastname, sexe: sexe, email: email, password: password})
    .then(result => {
        console.log(result);
        res.send("User créé avec succès !")
    }).catch(err => {
        console.log(err);
        res.send(err)
    })
}

exports.connectUser = (req, res) => {

    const user = new User();
    let correctPsw = user.findUserByPsw(req.body.password)
    user.createTable()
    console.log(req.body, correctPsw[0]);
    
    if(correctPsw[0] != undefined){
        res.send("Votre connexion a réussi !")
    }
    else{
        res.send("Le mot de passe fourni est incorrect !")
    }

}

exports.getAllUsers = (req, res) => {
    
    User.getUsers().forEach(userName => {
        console.log(userName);
    })

    res.send(
        User.getUsers().map(userName => {
            return userName;
        })
    )
}

exports.getUserById = (req, res) => {
/*
    var new_user = new User(req.body);
    new_user.save(function(err, user){
        if(err){
            res.send(err);
            res.json(user);
        }
    });

    User.find({}, function(err, user){
        if(err){
            res.send(err);
            res.json(user);
        }
    });

    User.findById(req.param.userId, function(err, user){
        if(err){
            res.send(err);
            res.json(user);
        }
    });
    */
    //console.log(User.findUserById(req.params.id));
    //res.send(User.findUserById(req.params.id))
}