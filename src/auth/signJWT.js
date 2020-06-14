const jwt = require('jsonwebtoken');

function sign(payload, callback) {
    jwt.sign(payload, 'secret', null, (err, token) => {
        if(err) {
            return console.log(err);
        }
        callback(token);
    });
}

module.exports = sign;