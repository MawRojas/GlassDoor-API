const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var billingInformationSchema = new Schema ({
    first_name: String,
    last_name: String,
    street_addr: String,
    country: String,
    state: String,
    city: String,
    zipcode: Number
})

module.exports = mongoose.model('registration_billing_informations', billingInformationSchema);