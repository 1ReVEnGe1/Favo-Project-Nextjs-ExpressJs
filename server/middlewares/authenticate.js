//External Modules
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const authenticate = async (req , res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            return res.status(401).json({message: 'Authorization header missing'}) 
        }

        
        const token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({message: 'Token missing'});
        }

        //Verify Token
        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
        const userId = decoded.id;

        //get user from db
        const user = await User.findById(userId)
        if(!user){
            return res.status(401).json({message: 'Invalid token'});
        }

        //adding user data to req
        req.user = user
        next();

    } catch (error) {
         return res.status(401).json({message: 'Invalid token'});
        
    }
}

module.exports = authenticate