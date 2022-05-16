const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const SECRET_KEY = process.env.SECRET_KEY;

const userMiddleware = async (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) return res.sendStatus(403);
    const token = authHeaders.split(' ')[1];
    console.log('AUTH HEADER', authHeaders);

    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        const user = await User.findOne({ where: {id} });
        if (!user) return res.sendStatus(401);
        req.user = user;
        next();
    } catch (error) {
        res.sendStatus(401);
    }
};

module.exports = userMiddleware;