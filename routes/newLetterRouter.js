const express = require('express')
const router = express.Router()
const { requireJsonContent   } = require('../helpers/middleware') 
const path = require('path')
const rootPath = require('../helpers/path')

router.get('/', (req, res) => {
    res.redirect('/')
});

router.route('/form')
.get((request, response) => {

    response.sendFile(path.join(rootPath, 'view', 'index.html'));
    //response.sendFile(path.join(__dirname, '../', 'view', 'index.html'));
})
.post(requireJsonContent, (request, response) => {
    response.send(request.body);
    console.log(request.body);
/*
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', false);
    
    /*
    mongoose.connect('mongodb://127.0.0.1:27017/userdb', {  useUnifiedTopology: true  }, (error, client) => {
        if(error) return console.log(error);
        console.log("Le serveur node s'est connecté à MongoDB avec succès !");
    })
    
   // MongoDB supports promises if you want to use promises instead of callbacks
    mongoose.connect('mongodb://127.0.0.1:27017/userdb', {  useUnifiedTopology: true  })
    .then(client => {
        console.log("Le serveur node s'est connecté à MongoDB avec succès !");
        const db = client.db('testapi').catch(error => console.error(error));

        const usermails = db.collection('email')
        usermails.insertOne(request.body.email).then(result => {
            console.log(result);
        }).catch(error => console.error(error))
    });
*/
});

module.exports = router;