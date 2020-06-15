const auth = require('../../auth/authJWT');
const express = require('express');
const saveRoutes = express.Router();

saveRoutes.use((req, res, next) => {
    const session = req.session;

    if(session) {
        const token = session.token;

        auth.decoded(token, (decoded) => {
            req.decoded = decoded;
            next()
        })
    } else {
        res.send('no hay token');
    }
});


module.exports = saveRoutes;