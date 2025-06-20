const { User } = require('../db');
const JWT = require('jsonwebtoken');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
    const autherization = req.headers.autherization;

    console.log()

    if (!autherization) {
        return res.status(401).json({
            msg: "Autherization token missing"
        });
    }

    const words = autherization.split(" ");
    if (words.lenght != 2 && words[0] != 'bearer') {
        return res.status(400).json({
            msg: "Invalid formate token"
        });
    }

    const jwtToken = words[1];

    try {
        const user = await User.findOne({ username: username, password: password });
        if (!user) {
            return res.status(403).json({
                msg: "Access denied: user credentials invalid"
            });
        }
        const decodedValue = JWT.verify(jwtToken, process.env.JWT_SECRET);
        req.user = decodedValue;  //optional
        next();
    } catch (err) {
        return res.status(401).json({
            msg: "Invalid or expired token"
        });
    }

}

module.exports = userMiddleware;