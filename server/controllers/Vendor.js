const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Vendor = require("../database/models/Vendor");
const Reservation = require('../database/models/Reservation');
const SECRET_KEY = process.env.SECRET_KEY;

// REGISTER
exports.registerVendor = async (req, res) => {
  try {
    const {
      businessName,
      email,
      password,
      streetAddress,
      city,
      state,
      zipCode,
      maxCapacity,
      vendorImg,
    } = req.body;
    const vendor = await Vendor.findOne({ where: { email: email } });
    if (vendor) {
      return res
        .status(409)
        .send({ error: "409", message: "Vendor already exists" });
    }
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newVendor = new Vendor({
      ...req.body,
      password: hash,
    });
    const { _id } = await newVendor.save();
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    return res.status(201).send({ accessToken });
  } catch (error) {
    return res
      .status(400)
      .send({ error, message: "Could not create new vendor" });
  }
};

// LOGIN
exports.vendorLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const vendor = await Vendor.findOne({ where: { email: email } });
    //UNCOMMENT WHEN NOT USING MOCK DATA
    // const validatedPass = await bcrypt.compare(password, vendor.password);
    // if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: vendor._id }, SECRET_KEY);
    return res.status(200).send({ accessToken, success: true });
  } catch (error) {
    return res
      .status(400)
      .send({ error, message: "Username or password is incorrect" });
  }
};

// GET VENDOR PROFILE BY ID
exports.getVendorProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findByPk(id);
    delete vendor.dataValues.password;
    return res.status(200).send(vendor);
  } catch (error) {
    return res.status(404).send({ error, message: "Vendor not found" });
  }
};

// GET ALL VENDORS
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    return res.status(200).json(vendors);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ res: "Internal server error", error: true });
  }
};

// GET REGISTRATIONS
exports.getVendorReservations = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findOne({
      where: { id: id },
      include: {
        model: Reservation,
        as: "vendorReserve",
        attributes: ["reserveDate", "partySize"],
      },
      attributes: ["vendorName", "address"],
    });
    return res.status(200).json(vendor);
  } catch (error) {
    console.error(error, "in controllers");
    return res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.getAvailableVendors = async (req, res) => {
  try {
    const { dateRequested, zipcodeRequested, typeRequested, groupSize }  = req.body;
    const vendors = await Vendor.findAll({raw: true });
    const reservations = await Reservation.findAll({raw: true});

    const vendorMatch = vendors.filter(v => {
      return v.zipCode == zipcodeRequested && v.type == typeRequested && v.maxCapacity >= groupSize });

    const filteredDates = reservations.filter(r => {
      return String(r.reserveDate) == String(new Date(dateRequested))}).map(r => {
        return r.vendorId
      });

    const availableVenues = vendorMatch.filter(v => {
      return !filteredDates.includes(v.id)
    });
    return res.status(200).json(availableVenues);
  } catch (error) {
    return res.status(500).send({ res: 'Internal server error', error: true });
  }
}