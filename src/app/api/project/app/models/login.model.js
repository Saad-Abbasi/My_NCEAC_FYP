const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{type:String,unique:true},
    password:{type:String,required:true}

});

module.exports = mongoose.model('login', UserSchema);