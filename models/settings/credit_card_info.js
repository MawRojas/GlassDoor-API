const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var creditCardSchema=new Schema({
    fullName:String,
    creditNumber:String,
    expDate:String,
    cvc:String
})
module.exports = mongoose.model('credit_card_info', creditCardSchema);