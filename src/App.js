const express = require('express');
const { port } = require('./config');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message:'Is working'
    });
});

app.listen(port, (req, res) => console.log('server on http://localhost:3000'))