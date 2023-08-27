const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const generateToken = (payload)=>{
    return jwt.sign(payload,secretKey,{expiresIn:process.env.TOKEN_VALIDITY})
}

const verifyToken = (token)=>{
    try {
        return jwt.verify(token,secretKey);
    } catch (error) {
        return null;
    }
}

const jwtUtil = {generateToken,verifyToken};

module.exports = jwtUtil;