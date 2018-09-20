var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var review = require('../../models/review/review_reviews');

// CREATES A NEW REVIEW
router.post('/review', function (req, res) {
    review.create({
            type_of_review : req.body.type_of_review,
            subject : req.body.subject,
            message : req.body.message
        }, 
        function (err, review) {
            if (err) return res.status(500).send("There was a problem adding the review to the database.");
            res.status(200).send(review);
        });
});

// RETURNS ALL THE REVIEWS IN THE DATABASE
router.get('/reviews', function (req, res) {
    review.find({}, function (err, review) {
        if (err) return res.status(500).send("There was a problem finding the reviews.");
        res.status(200).send(review);
    });
});

// UPDATES A REVIEW
router.put('/review/:id', function (req, res) {
    review.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the review to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETES A REVIEW
router.delete("/review/:id", function(req, res) {
    review.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the review from the database.")
        }
        res.status(200).json(post);
      });
})

var employee_review = require('../../models/review/review_employee_reviews');

// CREATES A NEW EMPLOYEE REVIEW
router.post('/employee_review', function (req, res) {
    employee_review.create({
            job_title : req.body.job_title,
            salary : req.body.salary,
            job_level : req.body.job_level,
            subject : req.body.subject,
            message : req.body.message
        }, 
        function (err, employee_review) {
            if (err) return res.status(500).send("There was a problem adding the employee review to the database.");
            res.status(200).send(employee_review);
        });
});

// RETURNS ALL THE EMPLOYEE REVIEWS IN THE DATABASE
router.get('/employee_reviews', function (req, res) {
    employee_review.find({}, function (err, employee_review) {
        if (err) return res.status(500).send("There was a problem finding the employee reviews.");
        res.status(200).send(employee_review);
    });
});

// RETURNS EMPLOYEE REVIEW BY ID IN THE DATABASE
router.get('/employee_review/:id', function (req, res) {
    employee_review.findById(req.params.id)
        .then(doc => {
            if(!doc) { return res.status(404).end();}
            return res.status(200).json(doc);
        })
        .catch(err => next(err));
});

// UPDATES A EMPLOYEE REVIEW
router.put('/employee_review/:id', function (req, res) {
    employee_review.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the employee review to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETES A EMPLOYEE REVIEW
router.delete("/employee_review/:id", function(req, res) {
    employee_review.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the employee review from the database.")
        }
        res.status(200).json(post);
      });
})

var interview_review = require('../../models/review/review_interview_reviews');

// CREATES A NEW INTERVIEW REVIEW
router.post('/interview_review', function (req, res) {
    interview_review.create({
            job_title : req.body.job_title,
            offer_type : req.body.offer_type,
            interview_exprience : req.body.interview_exprience,
            recruitment_source: req.body.recruitment_source,
            interview_difficulty: req.body.interview_difficulty,
            subject : req.body.subject,
            message : req.body.message
        }, 
        function (err, interview_review) {
            if (err) return res.status(500).send("There was a problem adding the interview review to the database.");
            res.status(200).send(interview_review);
        });
});

// RETURNS ALL THE INTERVIEW REVIEWS IN THE DATABASE
router.get('/interview_reviews', function (req, res) {
    interview_review.find({}, function (err, interview_review) {
        if (err) return res.status(500).send("There was a problem finding the employee reviews.");
        res.status(200).send(interview_review);
    });
});

// RETURNS INTERVIEW REVIEW BY ID IN THE DATABASE
router.get('/interview_review/:id', function (req, res) {
    interview_review.findById(req.params.id)
        .then(doc => {
            if(!doc) { return res.status(404).end();}
            return res.status(200).json(doc);
        })
        .catch(err => next(err));
});

// UPDATES A INTERVIEW REVIEW
router.put('/interview_review/:id', function (req, res) {
    interview_review.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the interview review to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETES A INTERVIEW REVIEW
router.delete("/interview_review/:id", function(req, res) {
    interview_review.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the employee review from the database.")
        }
        res.status(200).json(post);
      });
})

module.exports = router;