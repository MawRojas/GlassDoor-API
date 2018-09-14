var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

var applicant = require('../../models/applicant/job_applicant');
router.post('/applicant', function(req, res){
    applicant.create({
        name : req.body.name,
        rating : req.body.rating,
        stage : req.body.stage,
        job_title : req.body.job_title,
    },
    function(err, applicant){
        if(err) return res.status(500).send("There was a problem adding the applicant to the database.");
        res.status(200).send(applicant);
    });
});

router.get('/applicant', function(req, res){
    applicant.find({}, function(err, applicant){
        if (err) return res.status(500).send('There was a problem finding the applicant in the database.');
        res.status(200).send(applicant);
    });
});

router.put('/applicant/:id', function(req, res){
    applicant.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if(err) {
            res.status(500).send("There was a problem updating the applicant.")
        }
        res.status(200).json(post);
    });
})

router.delete("/applicant/:id", function(req, res) {
    applicant.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) {
            res.status(500).send("There was a problem removing the applicant.")
        }
        res.status(200).json(post);
    });
})

module.exports = router;