const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var passwordSchema=new Schema({
    password:String,
    newPassword:String
})
module.exports = mongoose.model('password_info', passwordSchema);