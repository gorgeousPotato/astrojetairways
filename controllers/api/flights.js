const Flight = require('../../models/flight');


module.exports = {
  search
}

async function search(req,res) {
  console.log(hi);
  console.log(req);
  try {
    const flights = Flight.find({departure: req.body.departure, arrival: req.body.arrival}).exec();
    res.json(flights);
  } catch (err) {
    res.status(400).json(err)
  }
}

