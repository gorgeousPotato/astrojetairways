const Flight = require('../../models/flight');


module.exports = {
  search
}

async function search(req,res) {
  console.log('hi');
  console.log(req.query);
  try {
    const flights = await Flight.find({departure: req.query.departure, arrival: req.query.arrival}).exec();
    res.json(flights);
  } catch (err) {
    res.status(400).json(err)
  }
}