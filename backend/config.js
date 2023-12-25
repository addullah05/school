const dotenv = require ("dotenv");
dotenv.config();

const {
     JWT_SECRET,
     REFRESH_SECRET
    
    } = process.env;

module.exports = { JWT_SECRET, REFRESH_SECRET };