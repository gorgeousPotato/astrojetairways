require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');

(async function() {
  const flightsList = [];
  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
  for (let i=1; i<=31; i++) {
    flightsList.push(
      {spaceportD: 'EAR', spaceportA: 'JUP', flightN: 9023, departure: 'Earth', arrival: 'Jupiter', depDate: `2023-12-${pad(i)}T20:45:00.629+00:00`, arrDate: `2023-12-${pad(i)}T23:45:00.629+00:00`, ecoPrice: 2679, busPrice: 2859, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
      {spaceportD: 'EAR', spaceportA: 'JUP', flightN: 9023, departure: 'Earth', arrival: 'Jupiter', depDate: `2023-12-${pad(i)}T04:30:00.629+00:00`, arrDate: `2023-12-${pad(i)}T08:45:00.629+00:00`, ecoPrice: 2679, busPrice: 2850, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'VEN', flightN: 9024, departure: 'Earth', arrival: 'Venus', depDate: `2023-12-${pad(i)}T11:35:00.629+00:00`, arrDate: `2023-12-${pad(i)}T12:45:00.629+00:00`, ecoPrice: 370, busPrice: 639, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'VEN', flightN: 9024, departure: 'Earth', arrival: 'Venus', depDate: `2023-12-${pad(i)}T00:05:00.629+00:00`, arrDate: `2023-12-${pad(i)}T01:20:00.629+00:00`, ecoPrice: 370, busPrice: 639, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'MAR', flightN: 9067, departure: 'Earth', arrival: 'Mars', depDate: `2023-12-${pad(i)}T18:45:00.629+00:00`, arrDate: `2023-12-${pad(i)}T19:40:00.629+00:00`, ecoPrice: 258, busPrice: 410, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'MAR', flightN: 9067, departure: 'Earth', arrival: 'Mars', depDate: `2023-12-${pad(i)}T07:05:00.629+00:00`, arrDate: `2023-12-${pad(i)}T08:00:00.629+00:00`, ecoPrice: 258, busPrice: 410, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'MER', flightN: 9091, departure: 'Earth', arrival: 'Mercury', depDate: `2023-12-${pad(i)}T18:20:00.629+00:00`, arrDate: `2023-12-${pad(i)}T20:35:00.629+00:00`, ecoPrice: 311, busPrice: 398, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'SAT', flightN: 9012, departure: 'Earth', arrival: 'Saturn', depDate: `2023-12-${pad(i)}T20:45:00.629+00:00`, arrDate: `2023-12-${pad(i)}T23:50:00.629+00:00`, ecoPrice: 2990, busPrice: 3120, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'URA', flightN: 9012, departure: 'Earth', arrival: 'Uranus', depDate: `2023-12-${pad(i)}T15:35:00.629+00:00`, arrDate: `2023-12-${pad(i)}T21:20:00.629+00:00`, ecoPrice: 3869, busPrice: 4190, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'MER', flightN: 9012, departure: 'Earth', arrival: 'Mercury', depDate: `2023-12-${pad(i)}T03:05:00.629+00:00`, arrDate: `2023-12-${pad(i)}T05:00:00.629+00:00`, ecoPrice: 311, busPrice: 398, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'NEP', flightN: 9018, departure: 'Earth', arrival: 'Neptune', depDate: `2023-12-${pad(i)}T00:45:00.629+00:00`, arrDate: `2023-12-${pad(i)}T16:30:00.629+00:00`, ecoPrice: 4170, busPrice: 4590, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    {spaceportD: 'EAR', spaceportA: 'PLU', flightN: 9076, departure: 'Earth', arrival: 'Pluto', depDate: `2023-12-${pad(i)}T01:20:00.629+00:00`, arrDate: `2023-12-${pad(i)}T22:45:00.629+00:00`, ecoPrice: 5490, busPrice: 6090, aircraft: 'Millenium Falcon MF-14', gate: 'E45'},
    )
  }
  await Flight.deleteMany({});
  const flights = await Flight.create(flightsList);

  console.log(flights)

  process.exit();

})();
