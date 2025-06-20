const { Admin } = require('../db');
const JWT = require('jsonwebtoken');
require('dotenv').config();

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    //    Ahh, this works but could be more optimized
    /*  const token = req.headers['autherization']; //bearer ewjxsndfg
        if (token) {
            const words = token.split(" ");  // [bearer, ewjxsndfg]
            const jwtToken = words[1];    //ewjxsndfg
            const username = req.headers.username;
            const password = req.headers.password;
    
            const isAdmin = await Admin.findOne({ username: username, password: password });
            // console.log(isAdmin);
            if (isAdmin) {
                try {
                    const decodedValue = JWT.verify(jwtToken, process.env.JWT_SECRET);
                    // console.log(decodedValue);
                    next();
                } catch (err) {
                    res.status(401).json({
                        msg: "You are not authenticated, sign in with valid username & password; pass the correct genarated token in autheriztion"
                    });
                }
            }
            else {
                return res.status(404).json({
                    msg: "You don't have admin access"
                });
            }
        }
        else {
            return res.status(411).json({
                msg: "Please pass autherization token in header"
            });
        }
    */

    //optamized way

    const authHeader = req.headers['autherization'];
    const username = req.headers.username;
    const password = req.headers.password;

    if (!authHeader) {
        return res.status(401).json({ msg: "Authorization token missing" });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
        return res.status(400).json({ msg: "Invalid authorization format" });
    }

    const jwtToken = tokenParts[1];

    try {
        const admin = await Admin.findOne({ username, password });
        if (!admin) {
            return res.status(403).json({ msg: "Access denied: admin credentials invalid" });
        }

        const decoded = JWT.verify(jwtToken, process.env.JWT_SECRET);
        req.admin = decoded; // Optional: attach decoded info to req
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Invalid or expired token" });
    }


}

module.exports = adminMiddleware;