const { Router } = require('express');
const vendorMiddleware = require('../middleware/vendor');
const vendor = require('../controllers/Vendor');
const vendorRouter = Router();

// REGISTER NEW VENDOR
vendorRouter.post('/register', vendor.registerVendor);

// VENDOR LOGIN
vendorRouter.post('/login', vendor.vendorLogin);

// GET VENDOR
vendorRouter.get('/find', vendorMiddleware, vendor.getVendorProfile);

// GET AVAILABLE VENDORS
vendorRouter.post('/availability', vendor.getAvailableVendors);

// <<<DUPLICATE>>> GET A VENDOR'S RESERVATIONS
//vendorRouter.get("/reservation", vendor.getVendorReservations);

// GET ALL VENDORS
vendorRouter.get('/allVendors', vendor.getAllVendors);

// VENDOR LOGOUT
// vendorRouter.post('/logout', vendorMiddleware, vendor.vendorLogout);

// DELETE VENDOR PROFILE
// vendorRouter.delete()

exports.vendorRouter = vendorRouter;
