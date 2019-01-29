const db = require('./db');


class Users {

    constructor(id,email, password) {
        this.id = id,
        this.email = email,
        this.password = password
    }


static createUser(email,password) {
    return db.any(`insert into users (email, password) values ($1,$2) returning id` , [email,password])
    .then(console.log)
    .catch(console.log)
}




static retreiveUser(id) {

return db.one('select * from users where id=$1',[id])
.then(console.log)


}
}


module.exports = Users