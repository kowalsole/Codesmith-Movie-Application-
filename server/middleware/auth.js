const jwt = require ('jsonwebtoken')

const authentication = (req, res, next) => {
    const token = req.cookies.auth_token;
    
    if (!token) {
        return res.status (401).send('Access Denied: No token provided')
    }

    try {
        //if the token has been tampered this line of code will throw an error
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //attaching the user information to the request object
        //now the function knows exactly who this user is 
        req.user = decoded; 

        //Next is the actual route
        next();
    } catch (err) {
        res.status(403).send('Invalid Token')
    }
}; 

module.exports = authenticatetoken; // this might be incorrect 

