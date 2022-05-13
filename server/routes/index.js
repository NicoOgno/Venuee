const { Router } = require("express");
//const authMiddleware = require('../middleware/auth')
const user = require("../controllers/User");
const vendor = require("../controllers/Vendor");
const reservation = require("../controllers/Reservation");
const router = Router();

// USER
// Register user
router.post("/user/register", user.registerUser);

// User login
router.post("/user/login", user.userLogin);

// Get user by id for profile info
router.get("/user/:id", user.getUser);

// Get all users
router.get("/users", user.getAllUsers);

// Get user reservations
router.get("/user/reservations/:id", user.getUserReservations);

// VENDOR
// Create vendor
router.post("/vendor/register", vendor.registerVendor);

// Vendor Login
router.post("/vendor/login", vendor.vendorLogin);

// Get vendor by id
router.get("/vendor/:id", vendor.vendorLogin);

// Get all vendors
router.get("/vendors", vendor.getAllVendors);

// vendor reservations
router.get("/vendor/reservation/:id", vendor.getVendorReservations);

// RESERVATIONS
// Create reservation
router.post("/reservations", () => {});

// Delete reservation
router.delete("/reservations/:id", () => {});

exports.router = router;
