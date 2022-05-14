const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/models/User");
const Reservation = require('../database/models/Reservation');
const Vendor = require('../database/models/Vendor');
const SECRET_KEY = process.env.SECRET_KEY;

// USER REGISTER
exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password, company, userImg } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res
        .status(409)
        .send({ error: "409", message: "Email already exists" });
    }
    const nameUser = await User.findOne({ where: { userName: userName } });
    if (nameUser) {
      return res
        .status(409)
        .send({ error: "409", message: "User name already taken" });
    }
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const storedUser = await User.create({userName, email, password: hash, company, userImg});
    const accessToken = jwt.sign({
      id: storedUser.id,
      userName: storedUser.userName,
      email: storedUser.email,
      company: storedUser.company,
    }, SECRET_KEY, { expiresIn: '2h'});
    return res.status(201).send({ accessToken, success: true });
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send({ error, message: "Could not create user" });
  }
};

// USER LOGIN
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({
      id: user.id,
      userName: user.userName,
      email: user.email,
      company: user.company,
      userImg: user.userImg
    }, SECRET_KEY, { expiresIn: '2h'});
    return res.status(200).send({ accessToken, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
};

// GET USER PROFILE
exports.getUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        delete user.dataValues.password;
        return res.status(200).send(user);
    } catch (error) {
        return res.status(404).send({ error, message: 'Resource not found' });
    }
};


// GET ALL USERS
exports.getAllUsers = async (req, res) => {
    console.log('IM HERE');
    try {
        const users = await User.findAll();
        //console.log('USERS', users);
        return res.status(200).json(users);
    } catch (error) {
        console.error('ERROR', error);
        return res.status(500).send({res: 'Internal server error', error: true});
    }
};

// GET USER RESERVATIONS
exports.getUserReservations = async (req, res) => {
    try {//'businessName', 'email', 'streetAddress', 'type', 'vendorImg'
        const id = req.params.id;
        const user = await User.findOne({ where: {id: id},
            include: {
              model: Reservation,
              as: 'userReserve',
              attributes: ['reserveDate', 'partySize', 'vendorId']
            },
            attributes: ['userName', 'email']
        });
        const reservation = await Reservation.findOne({where: {vendorId: user.userReserve[0].vendorId}});
        const { vendorId } = reservation;
        const vendorInfo = await Vendor.findOne({where: {id: vendorId}})
        const { businessName, email, streetAddress, type, vendorImg } = vendorInfo;
        return res.status(200).json({user, businessName, email, streetAddress, type, vendorImg });
    } catch (error) {
        console.error(error, 'in controllers');
        return res.status(500).send({res: 'Internal server error', error: true});
    }
};

exports.userLogout = (req, res) => {

};