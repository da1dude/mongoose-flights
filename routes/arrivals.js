const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/arrivals');

// POST /flights/:id/arrivals 
router.post('/flights/:id/arrivals', reviewsCtrl.create);

module.exports = router;