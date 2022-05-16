const jwt = require("jsonwebtoken");
const User = require("../database/models/User");
const SECRET_KEY = process.env.SECRET_KEY;

const userMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);
  //   const token = authHeaders.split(" ")[1];

  try {
    // verify and decode payload
    const { id } = jwt.verify(token, SECRET_KEY);
    // attempt to find user object and set to req
    const user = await User.findOne({ where: { id } });
    if (!user) return res.sendStatus(401);
    // storing user in req to use in controller
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

module.exports = userMiddleware;
