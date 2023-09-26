const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    //id: Number,
    name: {
        type: String,
        require: true,
    },
    sexe: String,
    email: String,
    phone: String,
    password: String,
});

module.exports = mongoose.model('user', userSchema);

/*
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },    
    sexe: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
})

const users = {
    username: ["Ben Kumala", "Philippe Mbambi"],
    password: ["123","Costa"]
}

module.exports = class UserModel {
    constructor(){
    }

    async createTable(){
        try {
            mongoose.model("User", UserSchema);            
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }

    }

    findUserByPsw(userPsw){
        return users.password.filter((psw) => psw == userPsw);
    }

    static getUsers(){
        return users.username;
    }

    static findUserById(id){
        return users.username[id];
    }
}*/