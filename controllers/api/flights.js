const Flight = require('../../models/flight');
const Ticket = require('../../models/ticket');


module.exports = {
  search,
  show,
  create,
  showTickets,
}

async function search(req,res) {
  
  try {
    const flights = Flight.find({departure: req.body.departure, arrival: req.body.arrival}).exec();
    res.json(flights);
  } catch (err) {
    res.status(400).json(err)
  }
}

async function show(req,res) {
  console.log(req.params.id)
  try {
    const flight = await Flight.findById(req.params.id).exec();
    console.log(flight);
    res.json(flight);
  } catch(err) {
    res.status(400).json(err);
  }
}


async function create(req,res) {
  try {
    req.body.user = req.user;
    const ticket = await Ticket.create(req.body);
    console.log(ticket);
    res.json(ticket);
  } catch(err) {
    res.status(400).json(err);
  }
}

async function showTickets(req,res) {
  console.log('hi');
  try {
    const tickets = await Ticket.find({
      user: req.user,
      flight: req.params.id,
    });
    console.log(tickets);
    res.json(tickets);
  } catch(err) {
    res.status(400).json(err);
  }
}

