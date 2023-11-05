import "./FlightCard.css"

export default function FlightCard({flight}) {
  return (
    <div>
      <h1>{flight.departure}</h1>
      <h1>{flight.arrival}</h1>
      <h1>{flight.depDate}</h1>
    </div>
  );

}