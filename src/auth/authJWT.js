const jwt = require('jsonwebtoken');
const { secret } = require('../config/index');

const authJWT = {
    sign(payload, callback) {

        jwt.sign(payload, secret, { expiresIn: '15m' }, (err, token) => {
            if(err) {
                console.log(err);
                return
            }
            callback(token);
        });
    },

    decoded(token, callback) {
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                console.log(err);
            } else {
                callback(decoded)
            }
        })
    }
}

module.exports = authJWT;