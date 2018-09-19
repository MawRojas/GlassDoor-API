const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var jobDetailsSchema = new Schema ({
    company_names: String,
    job_title: String,
    city: String,
    state: String,
    street_addr: String,
    zip_code: Number,
	job_description: String
})

module.exports = mongoose.model('registration_job_details', jobDetailsSchema);