const pool = require('./connection');

class MySQL {

    Get(table, callback) {
        pool.query(`SELECT * FROM ${table}`)
    }

    GetAll() {

    }

    Create() {

    }

    Update() {

    }

    Delete() {

    }
}

module.exports = MySQL;