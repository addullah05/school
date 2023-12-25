const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

// Creating a class to handle JWT operations
class jwtService {


    // Method to sign a JWT token with a payload, expiry (default: 7 days), and secret
    static sign(payload, expiry = '7d', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    // Method to verify a JWT token with a given secret (default: from config)
    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

module.exports = jwtService;
