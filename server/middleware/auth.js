const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = async (req, res, next) => {
    
    const authHeaders = req.headers['authorization'];

    if (!authHeaders) return res.sendStatus(403);
    const token = authHeaders.split(' ')[1];
    console.log('AUTH HEADERS', authHeaders);

    try {
        // verify and decode payload
        const { _id } = jwt.verify(token, SECRET_KEY)
        console.log('ID', _id)
        // attempt to find user object and set to req
        const user = await User.findOne({ _id });
        if (!user) return res.sendStatus(401);
        req.user = user;
        next();
    } catch (error) {
        res.sendStatus(401);
    }
};

module.exports = authMiddleware;