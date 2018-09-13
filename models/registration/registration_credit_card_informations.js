const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var creditCardInformationSchema = new Schema ({
    full_name_on_card: String,
    credit_card_number: Number,
    exp_month: Number,
    exp_Year: Number,
    cvc_code: Number
})

module.exports = mongoose.model('registration_credit_card_informations', creditCardInformationSchema);