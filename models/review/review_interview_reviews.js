const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var interviewReviewsSchema = new Schema ({
    job_title: String,
    offer_type: String,
    interview_experience: String,
    recruitment_source: [String],
    interview_difficulty: String
})

module.exports = mongoose.model('review_interview_reviews', interviewReviewsSchema);