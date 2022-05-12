const User = require('../database/models/User');
const Vendor = require('../database/models/Vendor');
const Reservation = require('../database/models/Reservation');


exports.postUser = async (req, res) => {
  try {
    const { name, lastName, company, email, password, img } = req.body;
    const user = await User.create({name, lastName, company, email, password, img});
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};

exports.getUserReservations = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ where: {id: id},
      include: {
        model: Reservation,
        as: 'userReserve',
        attributes: ['reserveDate', 'partySize']
      },
      attributes: ['name', 'lastName', 'email']
    });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error, 'in controllers');
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};


exports.postVendor = async (req, res) => {
  try {
    const { vendorName, email, password, img, address, capacity } = req.body;
    const vendor = await Vendor.create({vendorName, email, password, img, address, capacity});
    return res.status(201).json(vendor);
  } catch (error) {
    console.error(error);
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};

exports.getVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findByPk(id);
    return res.status(200).json(vendor);
  } catch (error) {
    console.error(error);
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};

exports.getVendorReservations = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findOne({ where: {id: id},
      include: {
        model: Reservation,
        as: 'vendorReserve',
        attributes: ['reserveDate', 'partySize']
      },
      attributes: ['vendorName', 'address']
    });
    return res.status(200).json(vendor);
  } catch (error) {
    console.error(error, 'in controllers');
    return res.status(500).send({res: 'Internal server error', error: true});
  }
};