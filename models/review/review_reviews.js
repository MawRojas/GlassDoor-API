const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var reviewsSchema = new Schema ({
    type_of_review: String,
    subject: String,
    message: String
})

module.exports = mongoose.model('review_reviews', reviewsSchema);