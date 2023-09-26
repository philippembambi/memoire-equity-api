const Admin = require("../models/Admin")

exports.create = async (req, res) => {

        Admin.insertMany({
          admin_name: "philippembambi",
          admin_psw: "Costa",
        }).then(() => {
          console.log("Administrateur par défaut créé avec succès !");
          res.json("Administrateur par défaut créé avec succès !");
        }).catch((error) => {
                console.log("Erreur : " + error);
                res.json("Erreur : " + error);
        });
     
}

exports.login = async (req, res) => {    
    var msg = ""
    
    Admin.findOne({admin_psw: req.body.password})
        .then(admin => {

            if(admin === null){
                msg = "Le mot de passe saisi est incorrect !"
                console.log(msg);

                res.json({
                    "api_response" : "failed",
                    "msg": msg,
                    "data": admin
                });
            }
            else{
                msg = "La connexion au serveur a réussi !"
 
                res.json({
                    "api_response" : "connected",
                    "msg": msg,
                    "data": admin,
                });

            }
        })
}