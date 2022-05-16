const { Router } = require('express');
const vendorMiddleware = require('../middleware/vendor');
const vendor = require('../controllers/Vendor');
const vendorRouter = Router();

// Register vendor
vendorRouter.post('/register', vendor.registerVendor);

// Vendor login
vendorRouter.post('/login', vendor.vendorLogin);

// Vendor profile by id
vendorRouter.get('/find/:id', vendorMiddleware, vendor.getVendorProfile);

// Available Vendors
vendorRouter.get('/availability', vendor.getAvailableVendors);

// All vendors
vendorRouter.get('/allVendors', vendor.getAllVendors)

// Vendor reservations
vendorRouter.get('/reservation/:id', vendor.getVendorReservations);

// Vendor logout
//vendorRouter.post('/logout', vendorMiddleware, vendor.vendorLogout);

exports.vendorRouter = vendorRouter;