const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var applicantSchema = new Schema({
    name: String,
    rating: String,
    stage: String,
    job_title: String
})

module.exports = mongoose.model('job_applicant', applicantSchema);