require('dotenv').config();

const config = {
    port: process.env.PORT || 8080,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    secret: process.env.SECRET,
    sessionSecret: process.env.SESSION_SECRET
}


module.exports = config