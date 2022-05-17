const jwt = require("jsonwebtoken");
const User = require("../database/models/User");
const SECRET_KEY = process.env.SECRET_KEY;

const userMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);
  //   const token = authHeaders.split(" ")[1];




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
