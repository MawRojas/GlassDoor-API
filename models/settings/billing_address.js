const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var billingAddressSchema=new Schema({
  address:String,
  country:String,
  state:String,
  city:String,
  zip:any
})

module.exports = mongoose.model('billing_address', billingAddressSchema);