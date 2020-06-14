const MySQL = require('../lib/MySQL');
const auth = require('../auth/signJWT');

class UserServces {
    constructor() {
        this.table = 'Persons';
        this.condiion = 'id';
    }

    GetUser(id, callback) {
        MySQL.Get(this.table, this.condiion, id, (user) => {
            callback(user);
        });
    }

    GetUsers(callback) {
        MySQL.GetAll(this.table, (users) => {
            callback(users);
        });
    }

    CreateUser(data, callback) {
        MySQL.Create(this.table, data, (userCreated) => {
            callback(userCreated);
        });
    }

    UpdateUser(id, data, callback) {
        MySQL.Update(this.table, this.condiion, data, id, (userUpdated) => {
            callback(userUpdated)
        });
    }

    DeleteUser(id, callback) {
        MySQL.Delete(this.table, this.condiion, id, (userDeleted) => {
            callback(userDeleted);
        })
    }

    LogIn(username, password, callback) {
        MySQL.Get(this.table, 'username', username, (user) => {
            if(user.length) {
                if(user[0].password === password) {
                    auth({ user }, (token)  => {
                        callback(token, 'succes');
                    });
                }
            } else {
                callback({}, 'failure');
            }
        })
    }
}

const userService = new UserServces();

module.exports = userService;