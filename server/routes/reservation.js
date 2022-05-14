const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const reservation = require('../controllers/Reservation');
const reservationRouter = Router();

// Create reservation
reservationRouter.post('/', userMiddleware, reservation.createReservation);

// Delete reservation
//reservationRouter.delete('/delete/:id', reservation.deleteReservation);

// Get User Reservation
reservationRouter.get('/user', userMiddleware, reservation.getUserReservations);

// Get Vendor Reservations
reservationRouter.get('/vendor', reservation.getVendorReservations);

reservationRouter.get('/:id', reservation.getReservationById);

exports.reservationRouter = reservationRouter;