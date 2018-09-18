var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

var job = require('../../models/job/job_jobs');
router.post('/job', function(req, res){
    job.create({
        name : req.body.name,
        date_posted : req.body.date_posted,
        impressions : req.body.impressions,
        clicks : req.body.clicks,
        CTR : req.body.CTR,
        apply_starts : req.body.apply_starts,
        apply_start_rate : req.body.apply_start_rate,
        days_sponsored : req.body.days_sponsored,
        location : req.body.location,
        company : req.body.company,
        applicants : req.body.applicants,
        is_slotted : req.body.is_slotted
    },
    function(err, job){
        if(err) return res.status(500).send("There was a problem adding the job to the database.");
        res.status(200).send(job);
    });
});

router.get('/job', function(req, res){
    job.find().populate('job').exec(function(err, job){
        if (err) return res.status(500).send('There was a problem finding the job');
        res.status(200).send(job);
    });
});

router.put('/job/:id', function(req, res){
    job.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if(err) {
            res.status(500).send("There was a problem updating the job.")
        }
        res.status(200).json(post);
    });
})

router.delete("/job/:id", function(req, res) {
    job.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) {
            res.status(500).send("There was a problem removing the job.")
        }
        res.status(200).json(post);
    });
})

module.exports = router;