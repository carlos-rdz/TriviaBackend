const db = require('./db');


class Users {

    constructor(id,email, password) {
        this.id = id,
        this.email = email,
        this.password = password
    }


static createUser(email,password) {
    return db.one(`insert into users (email, password) values ($1,$2) returning id` , [email,password])
    .then(data => {
        return new Users (data.id, email);
    })
    // .catch(console.log)
}




static retreiveUser(id) {

return db.one('select * from users where id=$1',[id])
.then(data => {
    return new Users (id, data.email);
})
// .then(console.log)


}
}


module.exports = Users