const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const vendorMiddleware = require("../middleware/vendor");
const reservation = require("../controllers/Reservation");
const { vendorLogin } = require("../controllers/Vendor");
const vendorMiddleware = require("../middleware/vendor");
const reservationRouter = Router();

// Create User reservation
reservationRouter.post("/", userMiddleware, reservation.createUserReservation);

reservationRouter.post(
  "/unavailable",
  vendorMiddleware,
  reservation.createVendorReservation
);

// Delete reservation
//reservationRouter.delete('/delete/:id', reservation.deleteReservation);

// Get User Reservation
reservationRouter.get("/user", userMiddleware, reservation.getUserReservations);

// Get Vendor Reservations
reservationRouter.get("/vendor", reservation.getVendorReservations);

reservationRouter.get("/:id", reservation.getReservationById);

exports.reservationRouter = reservationRouter;
