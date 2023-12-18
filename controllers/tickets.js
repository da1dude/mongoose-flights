const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', {flight});
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight=flight
    try {
        await Ticket.create(req.body)
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`)
}