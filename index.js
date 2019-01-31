require('dotenv').config();
const users = require('./models/users');
const db = require('./models/db');

const express = require('express');
const app = express();

app.use(express.static('public'))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

app.use(session({
    store: new pgSession({
                pgPromise: db
            }),
  secret: "asdasd",
  resave: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));



app.post('/login',(req,res) => {
    let email = req.body.email;
    let password = req.body.password;
   

    
    users.createUser(email,password)
    .then(newUser => {
        req.session.user = newUser
    })
    // req.session.save(function(err) {
    //     console.log("session saved")
    //   })
    // .then(console.log)
        // .then(console.log(req.session.user))
});

app.get('/game',(req,res) => {
    let loggedInUser = req.session.user
    res.send(loggedInUser)
});


app.get('/end',(req,res) => {
    req.session.destroy(function(err) {
        // cannot access session here
      })
});






app.listen(4000, () => {
    console.log('your express app is readddddy')
});