const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var employeeReviewsSchema = new Schema ({
    job_title: String,
    salary: Number,
    job_level: String,
    subject: String,
    message: String
})

module.exports = mongoose.model('review_employee_reviews', employeeReviewsSchema);