const jwt = require("jsonwebtoken");
const Vendor = require("../database/models/Vendor");
const SECRET_KEY = process.env.SECRET_KEY;

const vendorMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);

  try {
    // verify and decode payload
    const { id } = jwt.verify(token, SECRET_KEY);
    // attempt to find vendor object and set to req
    const vendor = await Vendor.findOne({ where: { id } });
    if (!vendor) return res.sendStatus(401);
    req.vendor = vendor;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

module.exports = vendorMiddleware;
