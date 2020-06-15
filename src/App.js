const express = require('express');
const session = require('express-session');
const { port, sessionSecret } = require('./config');

const app = express();

app.use(express.json());
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
}));

// ROUTES
const userRoutes = require('./routes/users');
app.use('/', userRoutes);


app.listen(port, (req, res) => {
    console.log('server on http://localhost:3000')
})