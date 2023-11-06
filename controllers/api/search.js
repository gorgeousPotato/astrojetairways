const Flight = require('../../models/flight');


module.exports = {
  search
}

async function search(req,res) {
  const queryDate = new Date(req.query.date);
  queryDate.setUTCHours(0, 0, 0, 0);
  const nextDay = new Date(queryDate);
  nextDay.setUTCDate(nextDay.getUTCDate() + 1);
    console.log('Query Date:', queryDate);
    console.log('Next Day:', nextDay);
  try {
    const flights = await Flight.find({
      departure: req.query.departure, 
      arrival: req.query.arrival, 
      depDate: { $gte: queryDate, $lt: nextDay }
    }).exec();
    console.log('Flights Found:', flights);
    res.json(flights);
  } catch (err) {
    res.status(400).json(err)
  }
}