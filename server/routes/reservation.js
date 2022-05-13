const { Router } = require('express');
const reservation = require('../controllers/Reservation');
const reservationRouter = Router();


// Create reservation
//reservationRouter.post('/create', reservation.creatReservation);

// Delete reservation
//reservationRouter.delete('/delete/:id', reservation.deleteReservation);


exports.reservationRouter = reservationRouter;