const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var basicInfoSchema=new Schema({
    firstName: String,
    lastName: String,
    jobTitle: String,
    gender: String,
    birthYear: Number,
    highestEducation: String,
})

module.exports = mongoose.model('basic_info', basicInfoSchema);