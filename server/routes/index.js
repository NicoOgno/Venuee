const { Router } = require('express');
const router = Router();

// RESERVATIONS
// Create reservation
router.post('/reservations', () => {});

// Delete reservation
router.delete('/reservations/:id', () => {});


// USER
// Create user
router.post('/user', () => {})

// Get user reservations
router.get('/user/:id', () => {});


// VENDOR
// Create vendor
router.post('/vendor', () => {});

// Get vendor
router.get('/vendor/:id', () => {})

// vendor reservations
router.get('/vendor/reservation/:id', () => {});


exports.router = router;