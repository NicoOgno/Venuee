const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const vendorMiddleware = require("../middleware/vendor");
const reservation = require("../controllers/Reservation");
const reservationRouter = Router();

// CREATE NEW USER RESERVATION
reservationRouter.post("/", userMiddleware, reservation.createUserReservation);

// CREATE NEW VENDOR RESERVATION - (TO MAKE DATE UNAVAILABLE)
reservationRouter.post("/unavailable", vendorMiddleware, reservation.createVendorReservation);

// GET A USER'S RESERVATIONS
reservationRouter.get("/user", userMiddleware, reservation.getUserReservations);

// GET A VENDOR'S RESERVATIONS
reservationRouter.get("/vendor", vendorMiddleware, reservation.getVendorReservations);

// GET RESERVATION BY RES ID - Need this one?
reservationRouter.get("/:id", reservation.getReservationById);

// DELETE A RESERVATION
reservationRouter.delete('/delete/:id', reservation.deleteReservationById);

exports.reservationRouter = reservationRouter;
