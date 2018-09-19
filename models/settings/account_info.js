const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var accountInfoSchema=new Schema({
  firstName:String,
  lastName:String,
  jobTitle:String,
  email:String,
  currrentPassword:String,
  newPassword:String
})

module.exports = mongoose.model('account_info', accountInfoSchema);