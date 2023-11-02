require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');

(async function() {
  await Flight.deleteMany({});
  const flights = await Flight.create([
    {flightN: 9023, departure: 'Earth', arrival: 'Jupiter', depDate: '2023-11-28T20:45:00.629+00:00', arrDate: '2023-08-28T22:45:00.629+00:00', ecoPrice: 1023, busPrice: 2790, aircraft: 'Millenium Falcon MF-14'},
    {flightN: 9024, departure: 'Earth', arrival: 'Venus', depDate: '2023-11-28T11:45:00.629+00:00', arrDate: '2023-08-28T12:45:00.629+00:00', ecoPrice: 370, busPrice: 639, aircraft: 'Millenium Falcon MF-14'},
    {flightN: 9067, departure: 'Earth', arrival: 'Mars', depDate: '2023-11-28T16:45:00.629+00:00', arrDate: '2023-08-28T17:45:00.629+00:00', ecoPrice: 1023, busPrice: 2790, aircraft: 'Millenium Falcon MF-14'},
    {flightN: 9091, departure: 'Earth', arrival: 'Mercury', depDate: '2023-11-28T20:45:00.629+00:00', arrDate: '2023-08-28T22:45:00.629+00:00', ecoPrice: 1023, busPrice: 2790, aircraft: 'Millenium Falcon MF-14'},
    {flightN: 9012, departure: 'Earth', arrival: 'Saturn', depDate: '2023-11-28T20:45:00.629+00:00', arrDate: '2023-08-28T22:45:00.629+00:00', ecoPrice: 1023, busPrice: 2790, aircraft: 'Millenium Falcon MF-14'},
    {flightN: 9018, departure: 'Earth', arrival: 'Neptune', depDate: '2023-11-28T20:45:00.629+00:00', arrDate: '2023-08-28T22:45:00.629+00:00', ecoPrice: 1023, busPrice: 2790, aircraft: 'Millenium Falcon MF-14'},
    {flightN: 9076, departure: 'Earth', arrival: 'Pluto', depDate: '2023-11-28T20:45:00.629+00:00', arrDate: '2023-08-28T22:45:00.629+00:00', ecoPrice: 1023, busPrice: 2790, aircraft: 'Millenium Falcon MF-14'},
  ]);

  console.log(flights)

  process.exit();

})();
