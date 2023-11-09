import "./FlightDetail.css";

export default function FlightDetailPage({flight, hours, minutes}) {
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
        </div>
      
    </div>
  );
}