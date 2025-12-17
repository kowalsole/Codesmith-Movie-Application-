import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    // 1. Get the token from the "Authorization" header
    // The frontend sends it like: "Bearer eyJhbGciOi..."
    const authHeader = req.headers['authorization'];
    
    // We split the string to remove the word "Bearer " and keep just the token
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access Denied: No token provided' });
    }

    try {
        // 2. Verify the token
        // If the token has been tampered with, this throws an error
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Attach user info to the request
        // Now the next function (like getUserById) knows exactly who this is
        req.user = decoded; 

        // 4. Move to the next step
        next();

    } catch (err) {
        return res.status(403).json({ error: 'Invalid Token' });
    }
}; 

// Export it so userRoutes.js can use it
export default authenticateToken;