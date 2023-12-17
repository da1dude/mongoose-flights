const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

async function newTicket(req, res) {
    res.render('tickets/new');
}

async function create(req, res) {
    try {
      await Performer.create(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect('flights/show', { title: 'Flight Detail', flight, tickets });
  }