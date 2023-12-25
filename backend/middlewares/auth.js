const jwtService = require("../jwtService");


// create auth middleware
const auth = async (req, res, next) => {
  
  
    // Corrected spelling: 'authorization'  
    let authHeader = req.headers.authorization; 
  
  
    // Corrected spelling: 'Unauthorized'   
    if (!authHeader) {
        return res.status(401).json({ msg: "Unauthorized" }); 
    }

    const token = authHeader.split(' ')[1];

    
    
    try{

    // verifying token        
        const { _id } = await jwtService.verify(token)
        const user = {
            _id,
        }
        req.user = user;
        
        next();
    } catch(err) {
        return res.status(401).json({msg: "unAuthorized"});
    }

    // Continue with your authentication logic...
};

module.exports = auth;
