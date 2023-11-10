import "./FlightDetail.css";
import { Link } from "react-router-dom";

export default function FlightDetailPage({flight, hours, minutes, passengers}) {
  function getTime(ISOdate) {
    const date = new Date(ISOdate);
    const hours = date.getHours().toString().padStart(2, '0');  
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  return (
    <div className="FlightDetail">
        <h5>Flight Details</h5>
        <div className="grid-container">
          <div className="duration">
            <p>{hours}:{minutes}</p>
          </div>
          <div className="graph">
            <div>
              <h5>{getTime(flight.depDate)}</h5>
              <h5>{flight.departure}</h5>
            </div>
            <div>
              <h5>{getTime(flight.arrDate)}</h5>
              <h5>{flight.arrival}</h5>
            </div>
          </div>
          <div className="info">
            <p>{flight.departure} Interstellar Spaceport ({flight.spaceportD})</p>
            <p>{flight.aircraft} </p>
            <p>{flight.arrival} Interstellar Spaceport ({flight.spaceportA})</p>
          </div>
          <div className="econom">
            <h5>Economy - ${flight.ecoPrice * passengers}</h5>
            <ul>
              <li><i class="fa-solid fa-suitcase"></i> 1 piece x 8 kg cabin baggage</li>
              <li><i class="fa-solid fa-utensils"></i> Meal service</li>
              <li><i class="fa-solid fa-suitcase-rolling"></i> 2 pieces x 23 kg baggage allowance</li>
              <li><i class="fa-solid fa-dice"></i> $180 change fee</li>
              <li><i class="fa-solid fa-money-check-dollar"></i> $240 return fee</li>
              <Link to="#"><button className="select-flight-btn" >Select this flight</button></Link>
            </ul>
          </div>
          <div className="business">
            <h5>Business - ${flight.busPrice * passengers}</h5>
            <ul>
              <li><i class="fa-solid fa-suitcase"></i> 1 piece x 8 kg cabin baggage</li>
              <li><i class="fa-solid fa-utensils"></i> Meal service</li>
              <li><i class="fa-solid fa-suitcase-rolling"></i> 2 pieces x 23 kg baggage allowance</li>
              <li><i class="fa-solid fa-dice"></i> Change without fee</li>
              <li><i class="fa-solid fa-money-check-dollar"></i> Full refund</li>
              <Link to="#"><button className="select-flight-btn" >Select this flight</button></Link>
            </ul>
          </div>
        </div>
      
    </div>
  );
}