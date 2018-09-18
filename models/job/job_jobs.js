const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var jobSchema = new Schema({
    name: String,
    date_posted: String,
    impressions: String,
    clicks: Number,
    CTR: Number,
    apply_starts: Number,
    apply_start_rate: Number,
    days_sponsored: Number,
    location: String,
    company: String,
    applicants: [String],
    is_slotted: Boolean
})

module.exports = mongoose.model('job_jobs', jobSchema);