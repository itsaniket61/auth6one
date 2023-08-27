const jwtUtil = require("../Utils/jwt");

const authenticateToken = (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:'Token is required'});
    }

    const decodedToken = jwtUtil.verifyToken(token);
    if(!decodedToken){
        return res.status(401).json({ message: 'Invalid Token' });
    }

    req.userId = decodedToken.id;
    next();
}

module.exports = authenticateToken;