var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var account= require('../../models/settings/account_info');
//CREATES A NEW ACCOUNT
router.post('/account', function(req, res){
    account.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        jobTitle: req.body.jobTitle,
        email:req.body.email,
        password: req.body.password
    },
    function (err,account){
        if(err) return res.status(500).send("There was a problem adding account to the database");
        res.status(200).send(account);
    });
});

// CLOSES ACCOUNT
router.delete('/account/:id', function(req, res){
    account.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err){
            res.status(500).send("There was a problem removing the account from the database.")
        }   
        res.status(200).json(post);
    });
});

// RETURNS ALL THE ACCOUNT DETAILS IN THE DATABASE
router.get('/account/:id', function (req, res) {
    account.findById(req.params.id, function (err, account) {
        if (err) return res.status(500).send("There was a problem finding the acount details.");
        res.status(200).send(account);
    });
});

router.get('/account', function(req,res){
    account.find({},function(err, account){
        if (err) return res.status(500).send("There was a problem finding the acount details.");
        res.status(200).send(account);
    });
});

// UPDATES ACCOUNT DETAIL
router.put('/account/:id', function (req, res) {
    account.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the account details to the database.")
      }
      res.status(200).json(post);
    });
})

//CREATES BASIC INFO

var info_basic=require('../../models/settings/basic_info');
router.post('/info_basic', function(req, res){
    info_basic.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender,
        birthYear:req.body.birthYear,
        highestEducation:req.body.highestEducation
    },
    function (err,info_basic){
        if(err) return res.status(500).send("There was a problem adding the information to the database");
        res.status(200).send(info_basic);
    });
});


// RETURNS ALL THE BASIC INFO DETAILS IN THE DATABASE
router.get('/info_basic/:id', function (req, res) {
    info_basic.findById(req.params.id, function (err, info_basic) {
        if (err) return res.status(500).send("There was a problem finding the information details.");
        res.status(200).send(info_basic);
    });
});


// UPDATES BASIC INFORMATION DETAIL
router.put('/info_basic/:id', function (req, res) {
    info_basic.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the basic information detail to the database.")
      }
      res.status(200).json(post);
    });
})

//CREATE BILLING ADDRESS
var billing=require('../../models/settings/billing_address');
router.post('/billing', function(req, res){
    billing.create({
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        county:req.body.country,
        zip:req.body.zip
    },
    function (err, billing){
        if(err) return res.status(500).send("There was a problem adding the billing address to the database");
        res.status(200).send(billing);
    });
});
    


//UPDATE BILLING
router.put('/billing/:id', function(req, res){
    billing.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the billing information to the database.")
      }
    });
});

// RETURNS ALL THE BILLING DETAILS IN THE DATABASE
router.get('/billing/:id', function (req, res) {
    billing.findById(req.params.id, function (err, billing) {
        if (err) return res.status(500).send("There was a problem finding the information details.");
        res.status(200).send(billing);
    });
});



//CREATE CREDIT CARD INFO
var credit=require('../../models/settings/credit_card_info');
router.post('/credit', function(req, res){
    credit.create({
        fullName:req.body.fullName,
        creditNumber:req.body.creditNumber,
        expDate:req.body.expDate,
        cvc:req.body.cvc
    },
    function (err,credit){
        if(err) return res.status(500).send("There was a problem adding the credit card to the database");
        res.status(200).send(credit);
    });
});

// UPDATES CREDIT CARD DETAIL
router.put('/credit/:id', function (req, res) {
    credit.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the credit card information detail to the database.")
      }
      res.status(200).json(post);
    });
})

// DELETE CREDIT CARD INFO
router.delete('/credit/:id', function(req, res){
    credit.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err){
            res.status(500).send("There was a problem removing the credit card information from the database.")
        }
        res.status(200).json(post);
    });
});


// RETURNS ALL THE CREDIT CARD DETAILS IN THE DATABASE
router.get('/credit/:id', function (req, res) {
    credit.findById(req.params.id, function (err, credit) {
        if (err) return res.status(500).send("There was a problem finding the credit card details.");
        res.status(200).send(credit);
    });
});

router.get('/credit', function (req, res) {
    credit.find({}, function (err, credit) {
        if (err) return res.status(500).send("There was a problem finding the credit card details.");
        res.status(200).send(credit);
    });
});


//CREATE PASSWORD INFO
var password_account=require('../../models/settings/password_info');
router.post('/password_account', function(req,res){
password_account.create({
    password:req.body.password,
    newPassword: req.body.newPassword
    },
    function (err,password_account){
        if(err) return res.status(500).send("There was a problem adding the password information to the database");
        res.status(200).send(password_account)
    });
});
// RETURNS ALL THE PASSWORD DETAILS IN THE DATABASE
router.get('/password_account/:id', function (req, res) {
    password_account.findById(req.params.id, function (err, password_account) {
        if (err) return res.status(500).send("There was a problem finding the password details.");
        res.status(200).send(password_account);
    });
});
//UPDATE PASSWORD INFO
router.put('/password_account/:id', function(req, res){
    password_account.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the password information to the database.")
      }
    });
});
// DELETE PASSWORD INFO
router.delete('/password_account/:id', function(req, res){
    password_account.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err){
            res.status(500).send("There was a problem removing the password information from the database.")
        }
        res.status(200).json(post);
    });
});

//CREATE SUBSCRIPTION INFO
var subscription=require('../../models/settings/subscription_info');

router.post('/subscription', function(req,res){
subscription.create({
    twoSlots:req.body.twoSlots,
    threeSlots: req.body.threeSlots,
    fiveSlots:req.body.fiveSlots
    },
    function (err,subscription){
        if(err) return res.status(500).send("There was a problem adding the subscription information to the database");
        res.status(200).send(subscription)
    });
});
// RETURNS ALL THE SUBSCRIPTION DETAILS IN THE DATABASE
router.get('/subscription/:id', function (req, res) {
    password_account.findById(req.params.id, function (err, subscription) {
        if (err) return res.status(500).send("There was a problem finding the subscriptiond details.");
        res.status(200).send(subscription);
    });
});
//UPDATE SUBSCRIPTION INFO
router.put('/subscription/:id', function(req, res){
    subscription.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the subscription information to the database.")
      }
    });
});
// DELETE SUBSCRIPTION INFO
router.delete('/password_account/:id', function(req, res){
    subscription.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err){
            res.status(500).send("There was a problem removing the subscription information from the database.")
        }
        res.status(200).json(post);
    });
});

//CREATE USER SETTINGS INFO
var settings=require('../../models/settings/user_setting');
router.post('/settings', function(req,res){
    settings.create({
        email:req.body.emaill,
        password: req.body.password,
        newPassword:req.body.newPassword
    },
    function (err,settings){
        if(err) return res.status(500).send("There was a problem adding the user settings information to the database");
        res.status(200).send(settings)
    });
});

// DELETE SETTINGS INFO
router.delete('/settings/:id', function(req, res){
    settings.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err){
            res.status(500).send("There was a problem removing the user settings information from the database.")
        }
        res.status(200).json(post);
    });
});
// RETURNS ALL THE SETTINGS DETAILS IN THE DATABASE
router.get('/settings/:id', function (req, res) {
    settings.findById(req.params.id, function (err, settings) {
        if (err) return res.status(500).send("There was a problem finding the settings details.");
        res.status(200).send(settings);
    });
});
//UPDATE SETTINGS INFO
router.put('/settings/:id', function(req, res){
    settings.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the settings information to the database.")
      }
    });
});
module.exports = router;
