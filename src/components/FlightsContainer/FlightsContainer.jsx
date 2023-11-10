import "./FlightsContainer.css"
import FlightCard from "../FlightCard/FightCard";

export default function FlightsContainer({flights, date, passengers}) {
    const flightsList = flights.map((flight, id) => {
      return <FlightCard flight={flight} key={id} passengers={passengers}/>
    })
    function getMonthFromDate(dateString) {
      const date = new Date(dateString);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const month = months[date.getMonth()];
      return month;
    }
  return (
    <div className="FlightsContainer">
      {flights.length && <h3>{flights[0].departure} to {flights[0].arrival} on {date.substring(8,10)} {getMonthFromDate(date)} {date.substring(0, 4)}</h3>}
      {flights.length ? flightsList : <h3>Seems like there're no flights on {date}. Try another date!</h3>}
    </div>
  );
}