require('dotenv').config();
const users = require('./models/users');
const db = require('./models/db');

const express = require('express');
const app = express();

app.use(express.static('public'))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.post('/login',(req,res) => {

let email = req.body.email;
let password = req.body.password;
console.log(email,password)
users.createUser(email,password)
});






app.listen(4000, () => {
    console.log('your express app is readddddy')
});