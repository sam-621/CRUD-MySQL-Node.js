const auth = require('../../auth/authJWT');
const express = require('express');
const saveRoutes = express.Router();

saveRoutes.use((req, res, next) => {
    const cookie = req.cookies;

    if(cookie) {
        const { token } = req.cookies;
        auth.decoded(token, (decoded) => {
            req.decoded = decoded;
            next()
        })
    } else {
        res.redirect('/')
    }
});


module.exports = saveRoutes;