const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// POST /flights/:id/tickets 
router.post('/flights/:id/tickets/new', ticketsCtrl.new);

router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;