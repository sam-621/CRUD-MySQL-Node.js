const express = require('express');
const { port } = require('./config');

const app = express();

app.use(express.json())

// ROUTES
const userRoutes = require('./routes/users');
app.use('/', userRoutes);


app.listen(port, (req, res) => {
    console.log('server on http://localhost:3000')
})