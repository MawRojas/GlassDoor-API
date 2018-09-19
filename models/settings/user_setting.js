const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSettingSchema=new Schema({
    email:String,
    password:String,
    newPassword:String
})
module.exports = mongoose.model('user_setting', userSettingSchema);