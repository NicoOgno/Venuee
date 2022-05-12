const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/index');

// RESERVATIONS
// Create reservation
router.post('/reservations', () => {});

// Delete reservation
router.delete('/reservations/:id', () => {});


// USER
// Create user
router.post('/user', controllers.postUser);

// Get user reservations
router.get('/user/reservations/:id', controllers.getUserReservations);

// Get user by id
router.get('/user/:id', controllers.getUser);

// Get all users
router.get('/users', controllers.getAllUsers);


// VENDOR
// Create vendor
router.post('/vendor', controllers.postVendor);

// Get vendor
router.get('/vendor/:id', controllers.getVendor);

// vendor reservations
router.get('/vendor/reservation/:id', controllers.getVendorReservations);


exports.router = router;