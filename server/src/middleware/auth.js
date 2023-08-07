const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.id;
        const email = decodedToken.email;
        req.auth = {
            userId: userId,
            email: email,
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error});
    }
        
    
}