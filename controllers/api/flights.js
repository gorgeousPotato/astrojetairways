const Flight = require('../../models/flight');


module.exports = {
  index
}

async function index(req,res) {
  try {
    const flights = Flight.find({departure: req.body.departure, arrival: req.body.arrival}).exec();
    res.json(flights);
  } catch (err) {
    res.status(400).json(err)
  }
}

