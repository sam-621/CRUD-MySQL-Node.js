const pool = require('./database/connection');

class MySQL {

    Get(table, condition, id, callback) {
        pool.query(`SELECT * FROM ${table} WHERE ${condition} = ?`, [id], (err, row) => {
            if(err) {
                return console.log(err);
            }
            callback(row);
        })
    }

    GetAll(table, callback) {
        pool.query(`SELECT * FROM ${table}`, (err, raws) => {
            if(err) {
                return console.log(err);
            }

            callback(raws);
        });
    }

    Create(table, data, callback) {
        pool.query(`INSERT INTO ${table} SET ?`, [data], (err, rowCreated) => {
            if(err) {
                return console.log(err);
            }

            callback(rowCreated);
        });
    }

    Update(table, condition, data, id, callback) {
        pool.query(`UPDATE ${table} SET ? WHERE ${condition} = ?`, [data, id], (err, rowUpdated) => {
            if(err) {
                return console.log(err);
            }

            callback(rowUpdated)
        })
    }

    Delete(tabla, condition, id, callback) {
        pool.query(`DELETE FROM ${tabla} WHERE ${condition} = ?`, [id], (err, rowDeleted) => {
            if(err) {
                return console.log(err);
            }
            callback(rowDeleted);
        })
    }
}

const Actions = new MySQL();

module.exports = Actions;