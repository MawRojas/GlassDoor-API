var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var job_detail = require('../../models/registration/registration_job_details');

// CREATES A NEW JOB DETAIL
router.post('/job_details', function (req, res) {
    job_detail.create({
            company_names : req.body.company_names,
            job_title : req.body.job_title,
            city : req.body.city,
            state: req.body.state,
            street_addr: req.body.street_addr,
            zip_code: req.body.zip_code,
            job_description: req.body.job_description
        }, 
        function (err, job_detail) {
            if (err) return res.status(500).send("There was a problem adding the job detail to the database.");
            res.status(200).send(job_detail);
        });
});

// RETURNS ALL THE JOB DETAILS IN THE DATABASE
router.get('/job_details', function (req, res) {
    job_detail.find({}, function (err, job_details) {
        if (err) return res.status(500).send("There was a problem finding the job details.");
        res.status(200).send(job_details);
    });
});

// UPDATES A JOB DETAIL
router.put('/job_details/:id', function (req, res) {
    job_detail.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the job detail to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETES A JOB DETAIL
router.delete("/job_details/:id", function(req, res) {
    job_detail.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the job detail to the database.")
        }
        res.status(200).json(post);
      });
})

var billing_information = require('../../models/registration/registration_billing_informations');

// CREATES A NEW BILLING INFORMATION
router.post('/billing', function (req, res) {
    billing_information.create({
            first_name : req.body.first_names,
            last_name : req.body.last_name,
            street_addr: req.body.street_addr,
            country: req.body.country,
            state: req.body.state,
            city : req.body.city,
            zip_code: req.body.zip_code,
        }, 
        function (err, billing_information) {
            if (err) return res.status(500).send("There was a problem processing the billing information.");
            res.status(200).send(billing_information);
        });
});

// RETURNS ALL THE BILLING INFORMATION IN THE DATABASE
router.get('/billing_details', function (req, res) {
    billing_information.find({}, function (err, billing_information) {
        if (err) return res.status(500).send("There was a problem finding the billing details.");
        res.status(200).send(billing_information);
    });
});

// UPDATES A BILLING INFORMATION
router.put('/billing_details/:id', function (req, res) {
    billing_information.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the billing detail to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETES A BILLING INFORMATION
router.delete("/billing_details/:id", function(req, res) {
    billing_information.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem deleting the billing information to the database.")
        }
        res.status(200).json(post);
      });
})

var credit_card_information = require('../../models/registration/registration_credit_card_informations');

// CREATES A NEW CREDIT CARD INFORMATION
router.post('/payment', function (req, res) {
    credit_card_information.create({
            full_name_on_card : req.body.full_name_on_card,
            credit_card_number : req.body.credit_card_number,
            exp_month: req.body.exp_month,
            exp_year: req.body.exp_year,
            cvc_code: req.body.cvc_code,
        }, 
        function (err, credit_card_information) {
            if (err) return res.status(500).send("There was a problem processing the billing information.");
            res.status(200).send(credit_card_information);
        });
});

// RETURNS ALL THE CREDIT CARD INFORMATION IN THE DATABASE
router.get('/credit_card_details', function (req, res) {
    credit_card_information.find({}, function (err, credit_card_information) {
        if (err) return res.status(500).send("There was a problem finding the credit card details.");
        res.status(200).send(credit_card_information);
    });
});

// UPDATES A CREDIT CARD INFORMATION
router.put('/credit_card_details/:id', function (req, res) {
    credit_card_information.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the credit card detail to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETES A CREDIT CARD INFORMATION
router.delete("/credit_details/:id", function(req, res) {
    credit_card_information.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem deleting the credit card information to the database.")
        }
        res.status(200).json(post);
      });
})

module.exports = router;