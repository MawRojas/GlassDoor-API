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
var settingsController=require('.require/settings/settings_controller');
var registrationController = require('./controllers/registration/registration_controller');
var reviewController = require('./controllers/review/review_controller');
var fileController = require('./controllers/files/files_controller');
var job_controller = require('./controllers/job/job_controller');
var job_applicant_controller = require('./controllers/applicant/job_applicant_controller');



//Add your controllers to the app
app.use('/settings', settingsController);
app.use('/company', companyController);
app.use('/registration', registrationController);
app.use('/review', reviewController);
app.use('/file', fileController);
app.use('/job', job_controller);
app.use('/applicant', job_applicant_controller);


console.log("Listening to port: " + port);