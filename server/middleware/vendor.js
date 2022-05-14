const jwt = require('jsonwebtoken');
const Vendor = require('../database/models/Vendor');
const SECRET_KEY = process.env.SECRET_KEY;

const vendorMiddleware = async (req, res, next) => {
    console.log("REQ RES", req, res)
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) return res.sendStatus(403);
    const token = authHeaders.split(' ')[1];
    console.log('AUTH HEADER', authHeaders);

    try {
        // verify and decode payload
        const { _id } = jwt.verify(token, SECRET_KEY)
        // attempt to find vendor object and set to req
        const vendor = await Vendor.findOne({ _id });
        if (!vendor) return res.sendStatus(401);
        req.vendor = vendor;
        next();
    } catch (error) {
        res.sendStatus(401);
    }
};

module.exports = vendorMiddleware;