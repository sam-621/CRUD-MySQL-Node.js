const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { port, sessionSecret } = require('./config');

const app = express();

app.use(express.json());

app.use(helmet(helmet.contentSecurityPolicy({
    directives: {
        "default-src": ["'self"],
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
})));
app.use(cookieParser());

// ROUTES
const userRoutes = require('./routes/users');
app.use('/', userRoutes);


app.listen(port, (req, res) => {
    console.log('server on http://localhost:3000')
})