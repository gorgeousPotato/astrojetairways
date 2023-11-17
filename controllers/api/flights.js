const Flight = require('../../models/flight');
const Ticket = require('../../models/ticket');


module.exports = {
  search,
  show,
  create,
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
    const ticket = await Ticket.create(req.body);
    console.log(ticket);
    res.json(ticket);
  } catch(err) {
    res.status(400).json(err);
  }
}

