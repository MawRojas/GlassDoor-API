const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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

//Add your controllers to the app
app.use('/company', companyController);


console.log("Listening to port: " + port);