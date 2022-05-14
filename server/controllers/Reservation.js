const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/models/User");
const Reservation = require('../database/models/Reservation');
const Vendor = require('../database/models/Vendor');
const SECRET_KEY = process.env.SECRET_KEY;

// CREATE RESERVATION
exports.createReservation = async (req, res) => {
    // query reservation table with user id from token in header
    // frontend sends res object with attached vendor id
    // just like user register
    try {
        const { vendorId, partySize, reserveDate } = req.body;
        const newReservation = await Reservation.create({
            vendorId, partySize, reserveDate, userId: req.user.id
        })
        return res.status(200).json({ newReservation })
    } catch (error) {
        console.error(error, 'in createReservation controllers');
        return res.status(500).send({res: 'Internal server error', error: true});
    }
};

// GET USER RESERVATIONS
exports.getUserReservations = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findOne({ where: {id},
            include: {
              model: Reservation,
              as: 'userReserve',
              attributes: ['reserveDate', 'partySize', 'vendorId'],
              include: {
                model: Vendor,
                as: 'vendorInfo',
                attributes: ['businessName', 'streetAddress']
              }
            },
        });
        const reservations = user.userReserve;
        return res.status(200).json({ reservations });
    } catch (error) {
        console.error(error, 'in controllers');
        return res.status(500).send({res: 'Internal server error', error: true});
    }
};

// GET VENDOR RESERVATIONS
exports.getVendorReservations = async (req, res) => {
    try {
        //const id = req.vendor.id;
        const vendor = await Vendor.findOne({ where: {id: 1},
            include: {
              model: Reservation,
              as: 'vendorReserve',
              attributes: ['reserveDate', 'partySize', 'userId'],
              include: {
                model: User,
                as: 'userInfo',
                attributes: ['userName', 'email']
              }
            },
        });
        console.log({vendor});
        const reservations = vendor.vendorReserve;
        return res.status(200).json({ reservations });
    } catch (error) {
        console.error(error, 'in controllers');
        return res.status(500).send({res: 'Internal server error', error: true});
    }
};

// GET RESERVATION BY ID
exports.getReservationById = async (req, res) => {
    const id = req.params.id;
    const reservation = await Reservation.findByPk(id);
    console.log({reservation, id})
    return res.status(200).json({ reservation });
};