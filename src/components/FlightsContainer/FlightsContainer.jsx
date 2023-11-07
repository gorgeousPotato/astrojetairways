import "./FlightsContainer.css"
import FlightCard from "../FlightCard/FightCard";

export default function FlightsContainer({flights, date}) {
    const flightsList = flights.map((flight, id) => {
      return <FlightCard flight={flight} key={id}/>
    })
  return (
    <div className="FlightsContainer">
      {flights.length && <h3>{flights[0].departure} to {flights[0].arrival} on {date.substring(0,10)}</h3>}
      {flights.length ? flightsList : <h3>Seems like there're no flights on {date}. Try another date!</h3>}
    </div>
  );
}