const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });  
}

async function show(req, res) {
    const flights = await FlightfindById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flights });  
}

function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { title: 'New Flights', errorMsg: '' });
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { title: 'New Flights', errorMsg: err.message });
    }
}