import "./FlightCard.css"

export default function FlightCard({flight}) {
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
  return (
    <div className="FlightCard">
      <div className="flex-row">
        <div>
          <h3>{flight.departure}</h3>
          <h3>{getTime(flight.depDate)}</h3>
        </div>
        <div>
          <h3>{flight.arrival}</h3>
          <h3>{getTime(flight.arrDate)}</h3>
        </div>
        <div>
          <p>Economy - ${flight.ecoPrice}</p>
          <p>Business - ${flight.busPrice}</p>
        </div>
      </div>
      <p>Flight duration - {hours} hours {minutes} minutes</p>
    </div>
  );

}