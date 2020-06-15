const auth = require('../../auth/authJWT');
const express = require('express');
const saveRoutes = express.Router();

saveRoutes.use((req, res, next) => {
    const token = req.session.token;

    if(token) {

        auth.decoded(token, (decoded) => {
            req.decoded = decoded;
            next()
        })
    } else {
        res.redirect('/')
    }
});


module.exports = saveRoutes;