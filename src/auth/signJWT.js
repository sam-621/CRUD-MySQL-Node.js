const jwt = require('jsonwebtoken');
const { secret } = require('../config/index');

const authJWT = {
    sign(payload, callback) {

        jwt.sign({payload}, secret, null, (err, token) => {
            if(err) {
                return console.log(err);
            }
            callback(token);
        });
    }
}

module.exports = authJWT;