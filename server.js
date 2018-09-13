const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 3030; 
app.listen(port);

const db = "mongodb://localhost:27017/glassdoor";

mongoose.connect(db, err => {
    if(err) {
        console.log("Error: "+ err)
    } else {
        console.log("Connected to mongodb")
    }
})

//Add your controllers here
var companyController = require('./controllers/company/company_controller');
<<<<<<< HEAD
var settingsController=require('.require/settings/settings_controller');
//Add your controllers to the app
app.use('/company', companyController);
app.use('/settings', settingsController);
=======
var registrationController = require('./controllers/registration/registration_controller');
var reviewController = require('./controllers/review/review_controller');

//Add your controllers to the app
app.use('/company', companyController);
app.use('/registration', registrationController);
app.use('/review', reviewController);
>>>>>>> master


console.log("Listening to port: " + port);