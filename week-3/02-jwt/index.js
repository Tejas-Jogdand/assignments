const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
const secret = 'secret';

function signJwt(username, password) {
    try{
    const schemaForEmail = zod.string().email();
    schemaForEmail.parse(username);

    const schemaForPassword = zod.string().min(6);  //greater than or equals to 
    schemaForPassword.parse(password);

    const token = jwt.sign({username,password},secret);
    return token;

    }catch(e){
        console.log("Invalid input : ",e)
    };
    return null;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
        const isValid = jwt.verify(token,secret);
        if(isValid)
            return true;
    }catch(e){
        console.log("Couldn't verify token : ",e);
    }
    return false;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    try{
        const decodeValue = jwt.decode(token);
        if(decodeValue){
            return true;
        }
        else{
            return false;
        }
    }catch(e){
        console.log("Couldn't decode : ",e);
    }
    return false;
}

token = signJwt('Tejas@xyz.com','password');
console.log("Token : ",token);
console.log("Verified : ",verifyJwt(token));
console.log("Decoded : ",decodeJwt(token));

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
