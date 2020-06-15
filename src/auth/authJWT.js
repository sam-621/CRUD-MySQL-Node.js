const jwt = require('jsonwebtoken');
const { secret } = require('../config/index');

const authJWT = {
    sign(payload, callback) {

        jwt.sign(payload, secret, null, (err, token) => {
            if(err) {
                console.log(err);
                return
            }
            callback(token);
        });
    }

}

module.exports = authJWT;