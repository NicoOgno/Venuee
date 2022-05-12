const { Router } = require('express');
const router = Router();

// RESERVATIONS
// Create reservation
router.post('/reservations', (req, res) => {
  res.send('Reservation was created!');
});

// Delete reservation
router.delete('/reservations/delete', (req, res) => {
  res.send('Reservation Deleted')
});

// USER
// Create user
router.post('/user', (req, res) => {
  res.send('User was created!')
})

// Get user reservations
router.get('/user/1', (req, res) => {
  res.json('Here are the user reservations');
});

// VENDOR
// Create vendor
router.post('/vendor', (req, res) => {
  console.log('Vendor was created!')
  res.send();
});

// Get vendor
router.get('/vendor/1', (req, res) => {
  res.send('Get vendor info')
})

// vendor reservations
router.get('/vendor/reservation/1', (req, res) => {
  res.send('Here are this vendor reservations');
});


exports.router = router;