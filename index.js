require('dotenv').config();
const users = require('./models/users');
const db = require('./models/db');


users.createUser("Carlos","Password")
// users.retreiveUser(1) 
// app.listen(3000, () => {
//     console.log('your express app is readddddy')
// });