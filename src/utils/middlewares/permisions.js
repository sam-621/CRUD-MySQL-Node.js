const express = require('express');
const permisions = express.Router();

permisions.use((req, res, next) => {
    const { rol } = req.decoded;

    if(rol === 'admin') {
        if(req.route.path == '/profile/getUsers'){
            next();
        }

        if(req.route.path == '/profile/create') {
            next();
        }

        return
    }

    if(rol === 'user') {
        if(req.route.path == '/profile/getUsers'){
            next();
        }

        if(req.route.path == '/profile/create') {
            res.json({
                message: 'no puede hcaer esto'
            })
        }

        return
    }
});

module.exports = permisions;