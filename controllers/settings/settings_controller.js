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

//UPDATE BASIC INFO
router.put('/info_basic/:id', function(req, res){
    info_basic.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the information to the database.")
      }
    });
});

//CREATE BILLING ADDRESS
var billing=require('../../models/settings/billing_address');
router.post('/billing', function(req,res){


//UPDATE BILLING
router.put('/billing/:id', function(req, res){
    billing.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the billing information to the database.")
      }
    });
});

//CREATE CREDIT CARD INFO
var credit_card=require('../../models/settings/credit_card_info');
credit_card.create({
    fullName:req.body.fullName,
    creditNumber: req.body.creditNumber,
    expDate: req.body.expDate,
    cvc:req.body.cvc
    
    },
    function (err,credit_card){
        if(err) return res.status(500).send("There was a problem adding the credit card information to the database");
        res.status(200).send(credit_card)
    });
});

//UPDATE CREDIT CARD INFO
router.put('/credit_card/:id', function(req, res){
    credit_card.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            res.status(500).send("There was a problem updating the credit card information to the database.")
      }
    });
});
// DELETE CREDIT CARD INFO
router.delete('/credit_card/:id', function(req, res){
    credit_card.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err){
            res.status(500).send("There was a problem removing the credit card information from the database.")
        }
        res.status(200).json(post);
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
var settings=require('../../models/settings/user_settings');
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
