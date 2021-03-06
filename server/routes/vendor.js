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

//GET VENDOR BY NAME
vendorRouter.post('/name', vendor.getVendorByName);

// GET AVAILABLE VENDORS
vendorRouter.post('/availability', vendor.getAvailableVendors);

// GET ALL VENDORS
vendorRouter.get('/allVendors', vendor.getAllVendors);

exports.vendorRouter = vendorRouter;
