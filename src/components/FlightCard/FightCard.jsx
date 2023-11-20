import {Link} from "react-router-dom";
import {useState} from "react";
import FlightDetail from "../FlightDetail/FlightDetail";
import "./FlightCard.css"

export default function FlightCard({flight, passengers}) {
  const [details, setDetails] = useState(false);
  function getTime(ISOdate) {
    const date = new Date(ISOdate);
    const hours = date.getHours().toString().padStart(2, '0');  
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  const arr = new Date(flight.arrDate);
  const dep = new Date(flight.depDate);
  let timeDifference = arr - dep;
  const hours = Math.floor(timeDifference / (60*60*1000));
  timeDifference -= hours * (60*60*1000);
  const minutes = Math.floor(timeDifference / (60*1000));
  const priceE = flight.ecoPrice * passengers;
  const priceB = flight.busPrice * passengers;
  function handleClick() {
    !details ? setDetails(true) : setDetails(false);
  }
  return (
    <div className="FlightCard">
      <div className="flex-row">
        <div className="flex-icon">
          <i class="fa-solid fa-rocket fa-xl icon-2"></i>
          <div>
            <h3>{flight.departure}</h3>
            <h3>{getTime(flight.depDate)}</h3>
          </div>
        </div>
        <div className="flex-icon">
          <i class="fa-solid fa-rocket fa-flip-vertical fa-xl icon-2"></i>
          <div>
            <h3>{flight.arrival}</h3>
            <h3>{getTime(flight.arrDate)}</h3>
          </div>
        </div>
        <div>
          <p>Economy - ${priceE}</p>
          <p>Business - ${priceB}</p>
        </div>
      </div>
      <div className="details">
        <p>Flight duration - {hours} hours {minutes} minutes</p>
        <button onClick={handleClick} className="details-btn">Details {!details ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i>}</button>
      </div>
      {details && <FlightDetail flight={flight} hours={hours} minutes={minutes} passengers={passengers}/>}
    </div>
  );

}