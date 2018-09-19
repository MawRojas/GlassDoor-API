const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var subscriptionSchema=new Schema({
    twoSlots:String,
    threeSlots:String,
    fiveSlots:String
})
module.exports = mongoose.model('subscription_info', subscriptionSchema);