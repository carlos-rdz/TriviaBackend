require('dotenv').config();
const users = require('./models/users');
const db = require('./models/db');

const express = require('express');
const app = express();

app.use(express.static('public'))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// 

// users.createUser("Carlos","Password")
// users.retreiveUser(1) 
// need to create a user object in order to display

app.get('/user',(req,res) => {
    users.retreiveUser(1)
    // .then(user => {console.log(user.email)})
    .then(userObj => {res.send(userObj)})
    .catch(err => {
        res.send(err)
    })
});



app.listen(3000, () => {
    console.log('your express app is readddddy')
});