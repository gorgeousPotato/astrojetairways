import "./FlightsContainer.css"
import FlightCard from "../FlightCard/FightCard";

export default function FlightsContainer({flights}) {
    const flightsList = flights.map((flight, id) => {
      return <FlightCard flight={flight} key={id}/>
    })
  return (
    <div>
      {flightsList}
    </div>
  );
}