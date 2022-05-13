const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const vendorMiddleware = require('../middleware/vendor');
const user = require('../controllers/User');
const vendor = require('../controllers/Vendor');
const reservation = require('../controllers/Reservation');
const router = Router();

// USER
// Register user
router.post("/user/register", user.registerUser);

// User login
router.post("/user/login", user.userLogin);

// User profile by id
router.get('/user/:id', userMiddleware, user.getUserProfile);

// All users
router.get('/users', user.getAllUsers);

// User reservations
router.get('/user/reservations/:id', user.getUserReservations);

// User logout
router.post('/logout', userMiddleware, user.userLogout);


// VENDOR
// Register vendor
router.post('/vendor/register', vendor.registerVendor);

// Vendor login
router.post('/vendor/login', vendor.vendorLogin);

// Vendor profile by id
router.get('/vendor/:id', vendorMiddleware, vendor.getVendorProfile);

// All vendors
router.get('/vendors', vendor.getAllVendors)

// Vendor reservations
router.get('/vendor/reservation/:id', vendor.getVendorReservations);

// Vendor logout
router.post('/logout', vendorMiddleware, user.userLogout);


// RESERVATIONS
// Create reservation
router.post("/reservations", () => {});

// Delete reservation
router.delete("/reservations/:id", () => {});

exports.router = router;
