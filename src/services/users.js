const MySQL = require('../lib/MySQL');

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
}

const userService = new UserServces();

module.exports = userService;