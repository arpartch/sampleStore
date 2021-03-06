const express = require('express');
const home = require('./routes/home'); // Importing the home route
const path = require('path');
const register = require('./routes/register');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sampleStore', (err, data) => {
    if (err){
        console.log('DB Connection Failed')
        return
    }
    console.log('DB Connection Success')
})

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.json()); // Parse the form as JSON
app.use(express.urlencoded({extended: false})); // Lets us receive the data 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', home); // tell the path to use this route
app.use('/register', register); // Connect the path and route


app.listen(5000);
console.log('App is running on http://localhost:5000');