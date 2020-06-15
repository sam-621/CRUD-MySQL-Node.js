const jwt = require('jsonwebtoken');
const express = require('express');
const saveRoutes = express.Router();
const { secret } = require('../../config/');

saveRoutes.use((req, res, next) => {
    const session = req.session;

    if(session) {
        const token = session.token.replace('Bearer', '');
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                console.log(err);
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.send('no hay token');
    }
});

module.exports = saveRoutes;