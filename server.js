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
var registrationController = require('./controllers/registration/registration_controller');

//Add your controllers to the app
app.use('/company', companyController);
app.use('/registration', registrationController);


console.log("Listening to port: " + port);