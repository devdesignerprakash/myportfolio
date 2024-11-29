const jwt= require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    console.log(req)
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    if (!authHeader) {
        return res.status(401).json({ msg: 'Access Denied. No token provided.' });
    }
    const token = authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ msg: 'Access Denied. Invalid token format.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(decoded)
        next();
    } catch (err) {
        console.error('Token verification error:', err.message);
        return res.status(403).json({ msg: 'Invalid or expired token.' });
    }

}
module.exports = verifyToken;