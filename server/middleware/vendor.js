const jwt = require('jsonwebtoken');
const Vendor = require('../database/models/Vendor');
const SECRET_KEY = process.env.SECRET_KEY;

const vendorMiddleware = async (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) return res.sendStatus(403);
    const token = authHeaders.split(' ')[1];

    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        const vendor = await Vendor.findOne({ where: {id} });
        if (!vendor) return res.sendStatus(401);
        req.vendor = vendor;
        next();
    } catch (error) {
        res.sendStatus(401);
    }
};

module.exports = vendorMiddleware;